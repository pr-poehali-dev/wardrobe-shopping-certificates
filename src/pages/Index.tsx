const Index = () => {
  return (
    <div className="min-h-screen bg-[#f0eeeb] flex items-center justify-center p-8 print:p-0 print:bg-white">
      <style>{`
        @media print {
          body { margin: 0; }
          .certificate { box-shadow: none !important; }
          @page { size: A4 portrait; margin: 0; }
        }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .cert-line {
          width: 100%;
          height: 1px;
          background-color: #d1d5db;
        }
        .cert-line-dark {
          width: 100%;
          height: 1px;
          background-color: #1a1a1a;
        }
        .field-line {
          border-bottom: 1px solid #d1d5db;
          height: 22px;
        }
      `}</style>

      <div
        className="certificate relative bg-white shadow-2xl"
        style={{ width: '210mm', height: '297mm', maxWidth: '100%', overflow: 'hidden' }}
      >
        {/* Outer border */}
        <div style={{ position: 'absolute', inset: '14px', border: '1px solid #e5e7eb', pointerEvents: 'none' }} />

        <div
          className="flex flex-col px-16"
          style={{ height: '297mm', paddingTop: '44px', paddingBottom: '44px' }}
        >

          {/* ── LOGO ── */}
          <div className="w-full mb-8">
            <p className="font-montserrat text-[8px] tracking-[0.45em] uppercase text-gray-400 mb-2">
              Персональный стилист
            </p>
            <h1 className="font-cormorant text-[40px] font-light text-[#1a1a1a] leading-none tracking-wider">
              Требунских Кирилл
            </h1>
          </div>

          <div className="cert-line-dark" />

          {/* ── TITLE ── */}
          <div className="w-full flex items-end justify-between mt-10 mb-10">
            <h2 className="font-cormorant text-[52px] font-light text-[#1a1a1a] leading-none tracking-wide">
              Подарочный<br />
              <span className="italic">сертификат</span>
            </h2>
            <p className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-gray-400 mb-2 text-right leading-loose">
              Настоящий документ<br />подтверждает право<br />на получение услуг
            </p>
          </div>

          <div className="cert-line" />

          {/* ── RECIPIENT ── */}
          <div className="w-full mt-8 mb-8">
            <p className="font-montserrat text-[8px] tracking-[0.45em] uppercase text-gray-400 mb-3">
              Вручается
            </p>
            <p className="font-cormorant text-[34px] font-light italic text-[#1a1a1a] leading-none">
              Елене
            </p>
          </div>

          <div className="cert-line" />

          {/* ── WISH ── */}
          <div className="w-full mt-8 mb-8">
            <p className="font-cormorant italic text-[17px] font-light text-[#3a3a3a] leading-relaxed" style={{ maxWidth: '80%' }}>
              Для вдохновения, новых идей и приятных открытий. Пусть красота отражается не только в образах, но и в настроении, а каждый новый взгляд в зеркало добавляет уверенности и легкости.
            </p>
          </div>

          <div className="cert-line" />

          {/* ── SERVICES ── */}
          <div className="w-full mt-8 mb-8 flex gap-12">
            <div className="flex-1">
              <p className="font-montserrat text-[7px] tracking-[0.4em] uppercase text-gray-400 mb-3">01</p>
              <h4 className="font-cormorant text-[22px] font-medium text-[#1a1a1a] leading-tight mb-2">
                Разбор гардероба
              </h4>
              <p className="font-montserrat text-[8.5px] font-light text-gray-500 leading-relaxed">
                Анализ гардероба, выявление капсульных единиц, составление образов и рекомендации по обновлению
              </p>
            </div>
            <div style={{ width: '1px', background: '#e5e7eb', flexShrink: 0 }} />
            <div className="flex-1">
              <p className="font-montserrat text-[7px] tracking-[0.4em] uppercase text-gray-400 mb-3">02</p>
              <h4 className="font-cormorant text-[22px] font-medium text-[#1a1a1a] leading-tight mb-2">
                Шопинг сопровождение
              </h4>
              <p className="font-montserrat text-[8.5px] font-light text-gray-500 leading-relaxed">
                Индивидуальный шопинг с учётом вашего типажа, образа жизни и бюджета
              </p>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="w-full mt-auto">
            <div className="cert-line-dark mb-7" />
            <div className="flex justify-between items-end">
              <div>
                <p className="font-montserrat text-[7px] tracking-[0.4em] uppercase text-gray-400 mb-3">
                  Подпись стилиста
                </p>
                <div className="field-line" style={{ minWidth: '150px' }} />
              </div>
              <div className="text-center">
                <p className="font-montserrat text-[7px] tracking-[0.4em] uppercase text-gray-400 mb-1">
                  Действителен до
                </p>
                <p className="font-cormorant text-[18px] font-light text-[#1a1a1a]">01.01.2027</p>
              </div>
              <div className="text-right">
                <p className="font-montserrat text-[7px] tracking-[0.4em] uppercase text-gray-400 mb-3">
                  Номер сертификата
                </p>
                <div className="field-line" style={{ minWidth: '150px' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
