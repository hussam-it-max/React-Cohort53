import useWindowSize from './usewindow';
export default function Sidebar() {
  const { width } = useWindowSize('Sidebar');
  return <h1>Sidebar width: {width}px</h1>;
}