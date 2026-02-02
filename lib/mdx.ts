import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const adventuresDirectory = path.join(process.cwd(), 'content/adventures');

export interface AdventureMetadata {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  published?: boolean;
}

export interface Adventure extends AdventureMetadata {
  id: string;
  content: string;
}

// Ensure the adventures directory exists
function ensureAdventuresDirectory() {
  if (!fs.existsSync(adventuresDirectory)) {
    fs.mkdirSync(adventuresDirectory, { recursive: true });
  }
}

// Get all adventure IDs for static generation
export function getAllAdventureIds(): string[] {
  ensureAdventuresDirectory();
  
  try {
    const fileNames = fs.readdirSync(adventuresDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading adventures directory:', error);
    return [];
  }
}

// Get adventure data by ID
export function getAdventureById(id: string): Adventure | null {
  ensureAdventuresDirectory();
  
  try {
    const fullPath = path.join(adventuresDirectory, `${id}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id,
      content,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      readTime: data.readTime || '5 min read',
      tags: data.tags || [],
      published: data.published !== false,
    };
  } catch (error) {
    console.error(`Error reading adventure ${id}:`, error);
    return null;
  }
}

// Get all adventures sorted by date
export function getAllAdventures(): Adventure[] {
  ensureAdventuresDirectory();
  
  const ids = getAllAdventureIds();
  const adventures = ids
    .map(id => getAdventureById(id))
    .filter((adventure): adventure is Adventure => adventure !== null && adventure.published !== false)
    .sort((a, b) => {
      // Sort by date descending
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  
  return adventures;
}

// Get adjacent adventures for navigation
export function getAdjacentAdventures(currentId: string) {
  const allAdventures = getAllAdventures();
  const currentIndex = allAdventures.findIndex(a => a.id === currentId);
  
  return {
    previous: currentIndex > 0 ? allAdventures[currentIndex - 1] : null,
    next: currentIndex < allAdventures.length - 1 ? allAdventures[currentIndex + 1] : null,
  };
}