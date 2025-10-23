interface PageHeaderProps {
  heading: string;
  description: string;
}
export const PageHeader = ({ heading, description }: PageHeaderProps) => {
  return (
    <div>
      <h1 className="text-primary text-2xl font-semibold">{heading}</h1>
      <p className="text-muted-foreground mt-1 text-xs">{description}</p>
    </div>
  );
};
