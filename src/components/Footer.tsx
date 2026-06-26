const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} <span className="text-foreground font-semibold">Salik Elhanan</span>. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-2">
          Designed & Built with <span className="text-primary">React</span> and ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
