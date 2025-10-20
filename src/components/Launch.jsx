
import HomeTop from './HomeTop';
import HomePointSection from './HomePointSection';
import HomeServiceSection from './HomeServiceSection';
import ClientTestimonials from './ClientTestimonials';

function Launch() {
  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ textAlign: 'center', fontSize: '70px' }}>Welcome to Devellum</h1>
      <HomeTop />
      <HomePointSection />
      <HomeServiceSection />
      <ClientTestimonials />
    </div>
  );
}

export default Launch;

