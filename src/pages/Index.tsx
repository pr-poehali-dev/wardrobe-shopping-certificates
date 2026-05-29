const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f4f2] flex items-center justify-center p-8 print:p-0 print:bg-white">
      <style>{`
        @media print {
          body { margin: 0; }
          .certificate { box-shadow: none !important; }
        }
        .cert-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, #1a1a1a 20%, #1a1a1a 80%, transparent);
        }
        .cert-divider-light {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, #9ca3af 20%, #9ca3af 80%, transparent);
        }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .certificate-border {
          position: absolute;
          inset: 16px;
          border: 1px solid #d1d5db;
          pointer-events: none;
        }
        .certificate-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #1a1a1a;
          border-style: solid;
        }
        .corner-tl { top: 10px; left: 10px; border-width: 1px 0 0 1px; }
        .corner-tr { top: 10px; right: 10px; border-width: 1px 1px 0 0; }
        .corner-bl { bottom: 10px; left: 10px; border-width: 0 0 1px 1px; }
        .corner-br { bottom: 10px; right: 10px; border-width: 0 1px 1px 0; }
        .service-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: #9ca3af;
        }
        .field-line {
          border-bottom: 1px solid #d1d5db;
          min-width: 160px;
          height: 20px;
        }
      `}</style>

      <div
        className="certificate relative bg-white shadow-2xl"
        style={{
          width: '210mm',
          minHeight: '297mm',
          maxWidth: '100%',
        }}
      >
        <div className="certificate-border" />
        <div className="corner-tl certificate-corner" />
        <div className="corner-tr certificate-corner" />
        <div className="corner-bl certificate-corner" />
        <div className="corner-br certificate-corner" />

        <div className="flex flex-col items-center px-16 py-14" style={{ minHeight: '297mm' }}>

          {/* Header */}
          <div className="w-full text-center mb-10">
            <p className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-gray-400 mb-6">
              Персональный стилист
            </p>
            <h1 className="font-cormorant text-[38px] font-light tracking-wide text-[#1a1a1a] leading-tight mb-1">
              Требунских
            </h1>
            <h2 className="font-cormorant text-[26px] font-light tracking-[0.2em] text-[#1a1a1a] mb-1">
              Кирилл
            </h2>
            <p className="font-cormorant italic text-[14px] font-light tracking-[0.1em] text-gray-400">
              Stylist
            </p>
          </div>

          <div className="cert-divider mb-10" />

          {/* Gift Certificate Title */}
          <div className="text-center mb-10">
            <p className="font-montserrat text-[8px] tracking-[0.5em] uppercase text-gray-400 mb-4">
              Настоящий документ подтверждает
            </p>
            <h3 className="font-cormorant text-[46px] font-light text-[#1a1a1a] leading-none tracking-wide mb-2">
              Подарочный
            </h3>
            <h3 className="font-cormorant italic text-[46px] font-light text-[#1a1a1a] leading-none tracking-wide">
              сертификат
            </h3>
          </div>

          {/* Recipient */}
          <div className="w-full text-center mb-10">
            <p className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-gray-400 mb-3">
              Вручается
            </p>
            <div className="flex justify-center">
              <p className="font-cormorant text-[28px] font-light italic tracking-wide text-[#1a1a1a] border-b border-gray-300 px-8">
                Елене
              </p>
            </div>
          </div>

          {/* Wish */}
          <div className="w-full text-center mb-10 px-4">
            <p className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-gray-400 mb-4">
              Пожелание
            </p>
            <div className="space-y-3">
              <div className="field-line w-full" />
              <div className="field-line w-full" />
              <div className="field-line w-full" />
            </div>
          </div>

          <div className="cert-divider-light mb-10" />

          {/* Services */}
          <div className="w-full mb-10 space-y-8">
            <p className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-gray-400 text-center mb-6">
              Включает услуги
            </p>

            {/* Service 1 */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 mt-1">
                <span className="service-number">01</span>
              </div>
              <div className="flex-1">
                <h4 className="font-cormorant text-[22px] font-medium text-[#1a1a1a] tracking-wide leading-tight mb-1">
                  Разбор гардероба
                </h4>
                <p className="font-montserrat text-[9px] font-light tracking-[0.1em] text-gray-500 leading-relaxed">
                  Анализ существующего гардероба, выявление капсульных единиц,<br />
                  составление образов и рекомендации по обновлению
                </p>
              </div>
            </div>

            <div className="cert-divider-light" />

            {/* Service 2 */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 mt-1">
                <span className="service-number">02</span>
              </div>
              <div className="flex-1">
                <h4 className="font-cormorant text-[22px] font-medium text-[#1a1a1a] tracking-wide leading-tight mb-1">
                  Шопинг сопровождение
                </h4>
                <p className="font-montserrat text-[9px] font-light tracking-[0.1em] text-gray-500 leading-relaxed">
                  Индивидуальный шопинг с персональным стилистом, подбор<br />
                  образов с учётом вашего типажа, образа жизни и бюджета
                </p>
              </div>
            </div>
          </div>

          <div className="cert-divider-light mb-10" />

          {/* Fields */}
          <div className="w-full space-y-6 mb-10">
            <div className="flex items-end gap-4">
              <p className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-gray-400 whitespace-nowrap flex-shrink-0">
                Дата активации
              </p>
              <div className="field-line flex-1" />
            </div>
            <div className="flex items-end gap-4">
              <p className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-gray-400 whitespace-nowrap flex-shrink-0">
                Действителен до
              </p>
              <div className="field-line flex-1" />
            </div>
          </div>

          {/* Footer */}
          <div className="w-full mt-auto">
            <div className="cert-divider mb-8" />
            <div className="flex justify-between items-end">
              <div>
                <p className="font-montserrat text-[7px] tracking-[0.4em] uppercase text-gray-400 mb-3">
                  Подпись стилиста
                </p>
                <div className="field-line" style={{ minWidth: '140px' }} />
              </div>
              <div className="text-right">
                <p className="font-montserrat text-[7px] tracking-[0.4em] uppercase text-gray-400 mb-3">
                  Номер сертификата
                </p>
                <div className="field-line" style={{ minWidth: '140px' }} />
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="font-cormorant italic text-[13px] font-light text-gray-300 tracking-widest">
                Требунских Кирилл · Персональный стилист
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;