type TagListProps = {
  tags: string[];
  size?: "md" | "lg";
  className?: string;
};

export default function TagList({ tags, size = "md", className = "" }: TagListProps) {
  return (
    <div className={`tag-list ${className}`}>
      {tags.map((tag) => (
        <span key={tag} className={`tag ${size === "lg" ? "tag--lg" : ""}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}
