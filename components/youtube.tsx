// components/Youtube.tsx
interface YoutubeProps {
  id?: string;
  url?: string;
  title?: string;
}

function extractYoutubeId(url: string): string | null {
  try {
    const u = new URL(url);

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }

    // https://youtu.be/VIDEO_ID
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }

    return null;
  } catch {
    return null;
  }
}

export default function Youtube({ id, url, title }: YoutubeProps) {
  const videoId = id ?? (url ? extractYoutubeId(url) : null);

  if (!videoId) {
    return (
      <div className="my-8 p-4 rounded-lg border border-destructive text-destructive text-sm">
        Invalid YouTube URL
      </div>
    );
  }

  return (
    <div className="my-10 aspect-video w-full overflow-hidden rounded-xl border border-border/50">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
