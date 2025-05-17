"use client";
import Image from "next/image";

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
}

// Sample client logos with sequential naming from client_logo-01 to client_logo-68
const clientLogos: ClientLogo[] = Array.from({ length: 66 }, (_, i) => {
  const num = i + 1;
  const formattedNum = num < 10 ? `0${num}` : `${num}`;
  return {
    id: num,
    name: `Client ${num}`,
    logo: `/assets/images/client_logo-${formattedNum}.svg`,
  };
}).filter((logo) => logo.id !== 3);

export default function ClientSlider() {
  // Create distinct sets of logos for each row
  const createDistinctRows = () => {
    // For mobile: 5 rows
    const mobileRowCount = 5;
    const logosPerMobileRow = Math.ceil(clientLogos.length / mobileRowCount);
    const mobileRows = Array.from({ length: mobileRowCount }, (_, i) => {
      const startIndex = i * logosPerMobileRow;
      // Get a slice of logos for this row and duplicate them for infinite scroll
      const rowLogos = clientLogos.slice(
        startIndex,
        startIndex + logosPerMobileRow
      );
      return [...rowLogos, ...rowLogos]; // Duplicate for infinite scroll
    });

    // For desktop: 2 rows
    const desktopRowCount = 2;
    const logosPerDesktopRow = Math.ceil(clientLogos.length / desktopRowCount);
    const desktopRows = Array.from({ length: desktopRowCount }, (_, i) => {
      const startIndex = i * logosPerDesktopRow;
      // Get a slice of logos for this row and duplicate them for infinite scroll
      const rowLogos = clientLogos.slice(
        startIndex,
        startIndex + logosPerDesktopRow
      );
      return [...rowLogos, ...rowLogos]; // Duplicate for infinite scroll
    });

    return { mobileRows, desktopRows };
  };

  const { mobileRows, desktopRows } = createDistinctRows();

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <div className="text-center">
          <div className="relative inline-block rounded-full text-xs lg:text-sm leading-[14px] lg:leading-4 text-brand-dark-blue border border-white/80 overflow-hidden px-3.5 py-1.5 lg:px-4 lg:py-2">
            {/* Gradient background */}
            <span
              className="absolute inset-0 rounded-full z-[-2]"
              style={{
                background:
                  "linear-gradient(302.62deg, #763EDB 0%, #0058E6 100%)",
              }}
            ></span>
            {/* White overlay */}
            <span className="absolute inset-0 rounded-full bg-white opacity-70 z-[-1]"></span>
            Уже используют
          </div>
        </div>
      </div>

      {/* Mobile Slider (5 rows) */}
      <div className="md:hidden">
        {mobileRows.map((row, rowIndex) => (
          <div
            key={`mobile-row-${rowIndex}`}
            className="relative overflow-hidden my-4"
          >
            <div
              className="flex gap-4 animate-slider whitespace-nowrap"
              style={{
                animationDuration: `${20 + rowIndex * 5}s`,
                animationDirection: rowIndex % 2 === 0 ? "normal" : "reverse",
              }}
            >
              {row.map((client, clientIndex) => (
                <div
                  key={`mobile-${rowIndex}-${client.id}-${clientIndex}`}
                  className="inline-flex items-center justify-center min-w-24"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt="Client's Logo"
                    width={120}
                    height={60}
                    className="w-auto h-auto max-h-10 object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Slider (2 rows) */}
      <div className="hidden md:block">
        {desktopRows.map((row, rowIndex) => (
          <div
            key={`desktop-row-${rowIndex}`}
            className="relative overflow-hidden my-8"
          >
            <div
              className="flex gap-8 animate-slider whitespace-nowrap"
              style={{
                animationDuration: `${30 + rowIndex * 10}s`,
                animationDirection: rowIndex % 2 === 0 ? "normal" : "reverse",
              }}
            >
              {row.map((client, clientIndex) => (
                <div
                  key={`desktop-${rowIndex}-${client.id}-${clientIndex}`}
                  className="inline-flex items-center justify-center min-w-max"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt="Client's Logo"
                    width={180}
                    height={90}
                    className="w-auto h-auto max-h-16 object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
