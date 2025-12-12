interface SocialLinkProps {
  href: string;
  imageSrc: string;
  alt?: string;
}

export default function SocialLink({ href, imageSrc, alt }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-center bg-cover shadow-md hover:shadow-lg hover:rotate-6 hover:scale-105 transform duration-500 flex-none"
      style={{ backgroundImage: `url('${imageSrc}')` }}
      aria-label={alt}
    />
  );
}

