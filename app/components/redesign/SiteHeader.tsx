import Header from './Header';
import { display, body } from './fonts';
import './redesign.css';

// The homepage header (with the services hover menu) for use on inner pages.
export default function SiteHeader() {
  return (
    <div className={`rd-root ${display.variable} ${body.variable}`}>
      <Header />
    </div>
  );
}
