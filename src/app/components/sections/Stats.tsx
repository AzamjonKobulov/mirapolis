export default function Stats() {
  return (
    <section id="stats" className="lg:space-y-10">
      <div
        className="max-w-237 mx-auto space-y-8
       px-3.5"
      >
        <h2>Мираполис в цифрах</h2>

        {/* Stats */}
        <div className="bg-reliable grid sm:grid-cols-3 rounded-[17.5px] lg:rounded-[20px] p-3.5 lg:p-4">
          {/* Stat 1 */}
          <div className="space-y-2.5 lg:space-y-3 text-center text-white p-4.5 lg:p-5">
            <p className="text-[66px]/[60px] lg:text-[76px]/[60px] font-bold">
              16
            </p>
            <p className="leading-4">Лет на рынке</p>
          </div>
          {/* Stat 2 */}
          <div className="space-y-2.5 lg:space-y-3 text-center text-white p-4.5 lg:p-5">
            <p className="text-[66px]/[60px] lg:text-[76px]/[60px] font-bold">
              1500+
            </p>
            <p className="leading-4">Довольных клиентов</p>
          </div>
          {/* Stat 1 */}
          <div className="space-y-2.5 lg:space-y-3 text-center text-white p-4.5 lg:p-5">
            <div className="flex items-end justify-center">
              <p className="text-[66px]/[60px] lg:text-[76px]/[60px] font-bold">
                2
              </p>
              <div className="flex flex-col items-start">
                <p className="font-medium text-[42px]/10 -mb-3">+</p>
                <p className="font-medium text-2xl/6">млн.</p>
              </div>
            </div>
            <p className="leading-4">Пользователей</p>
          </div>
        </div>
      </div>
    </section>
  );
}
