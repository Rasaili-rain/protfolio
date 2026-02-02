import { NextRequest, NextResponse } from 'next/server';
import { getAdventureById, getAllAdventures, getAdjacentAdventures } from '@/lib/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;

		const adventure = getAdventureById(id);
		if (!adventure) {
			return NextResponse.json({ error: 'Adventure not found' }, { status: 404 });
		}

		// Serialize MDX content
		const mdxSource = await serialize(adventure.content, {
			mdxOptions: {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [
					rehypeHighlight,
					rehypeSlug,
					[
						rehypeAutolinkHeadings,
						{
							behavior: 'wrap',
							properties: {
								className: ['anchor-link'],
							},
						},
					],
				],
			},
		});

		// Get all adventures for sidebar
		const allAdventures = getAllAdventures();

		// Get adjacent adventures for navigation
		const { previous, next } = getAdjacentAdventures(id);

		return NextResponse.json({
			adventure: {
				id: adventure.id,
				title: adventure.title,
				description: adventure.description,
				date: adventure.date,
				readTime: adventure.readTime,
				tags: adventure.tags,
			},
			allAdventures: allAdventures.map(a => ({
				id: a.id,
				title: a.title,
				description: a.description,
				date: a.date,
				readTime: a.readTime,
				tags: a.tags,
			})),
			previous: previous ? {
				id: previous.id,
				title: previous.title,
			} : null,
			next: next ? {
				id: next.id,
				title: next.title,
			} : null,
			mdxSource,
		});
	} catch (error) {
		console.error('Error loading adventure:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}