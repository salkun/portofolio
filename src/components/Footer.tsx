const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Built with{" "}
          <span className="text-primary">Laravel</span> mindset & ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
