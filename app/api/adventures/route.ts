import { NextResponse } from 'next/server';
import { getAllAdventures } from '@/lib/mdx';

export async function GET() {
  try {
    const adventures = getAllAdventures();
    
    // Return adventure metadata without content
    const adventureList = adventures.map(adventure => ({
      id: adventure.id,
      title: adventure.title,
      description: adventure.description,
      date: adventure.date,
      readTime: adventure.readTime,
      tags: adventure.tags,
    }));
    
    return NextResponse.json(adventureList);
  } catch (error) {
    console.error('Error loading adventures:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}