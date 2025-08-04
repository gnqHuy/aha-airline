import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const ScrollLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <ScrollToTop />
    {children}
  </>
);

export default ScrollLayout;
