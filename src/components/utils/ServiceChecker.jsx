import { useEffect, useState } from 'react';
import Image from 'next/image';
import ErrorLayout from '@/pages/error/layout';

const ServiceChecker = ({ serviceUrls }) => {
  const [serviceStatus, setServiceStatus] = useState([]);

  useEffect(() => {
    const checkServiceStatus = async () => {
      const statusArray = [];

      for (const url of serviceUrls) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            statusArray.push({ url, status: 'Available' });
          } else {
            statusArray.push({ url, status: 'Not Available' });
          }
        } catch (error) {
          statusArray.push({ url, status: 'Not Available' });
        }
      }

      setServiceStatus(statusArray);
    };

    checkServiceStatus();
  }, [serviceUrls]);

  const areAllServicesAvailable = serviceStatus.every(service => service.status === 'Available');

  // Tambahkan logika untuk menentukan apakah semua layanan tersedia
  if (areAllServicesAvailable) {
    return null; // Jika semua layanan tersedia, tidak perlu merender apapun
  }
  console.log('serviceUrls:', serviceUrls);

  return (
    <main className="main"> 
      {/* Tampilan checker saat beberapa atau semua layanan tidak tersedia */}
      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <div>
          <Image
            src="/assets/img/not-found.svg"
            className="img-fluid py-4 px-5 pb-0"
            alt="Page Not Found"
            width={600}
            height={600}
            priority={false}
          />
          
          <h2>Service Status:</h2>
          <ul>
            {serviceStatus.map((service, index) => (
              <li key={index}>
                {service.url}: {service.status}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

// Tentukan layout khusus untuk halaman ini
ServiceChecker.layout = ErrorLayout;

export default ServiceChecker;
