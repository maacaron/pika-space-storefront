import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formy i czas dostawy',
  description:
    'Zapoznaj się z informacjami o formach i czasie dostawy w naszym sklepie internetowym.',
}

export default function Dostawa() {
  return (
    <div className='flex flex-col gap-6 p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl-semi text-ui-fg-base'>Formy i czas dostawy</h1>
      <div className='text-ui-fg-subtle leading-relaxed'>
        <h2 className='text-xl-semi mt-4'>§1 Dostępne metody dostawy</h2>
        <ul className='list-disc list-inside'>
          <li>
            <strong>Paczkomaty InPost</strong> – szybka i wygodna forma odbioru przesyłek w wybranym
            Paczkomacie.
          </li>
          <li>
            <strong>Odbiór osobisty</strong> – możliwy po wcześniejszym ustaleniu terminu za pomocą
            e-maila lub mediów społecznościowych.
          </li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§2 Koszty dostawy</h2>
        <ul className='list-disc list-inside'>
          <li>
            Koszty dostawy są uzależnione od wybranej metody dostawy i są podawane podczas składania
            zamówienia.
          </li>
          <li>W przypadku odbioru osobistego koszty dostawy nie są naliczane.</li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§3 Czas realizacji zamówienia</h2>
        <ul className='list-disc list-inside'>
          <li>
            Czas realizacji zamówienia wynosi od <strong>1 do 3 dni roboczych</strong> od momentu
            zaksięgowania płatności na naszym koncie.
          </li>
          <li>
            Czas dostawy zależy od wybranej metody:
            <ul className='list-disc list-inside ml-6'>
              <li>
                <strong>Paczkomaty InPost</strong> – zazwyczaj 1-2 dni robocze od momentu nadania
                przesyłki.
              </li>
              <li>
                <strong>Odbiór osobisty</strong> – możliwy w ustalonym terminie, po wcześniejszym
                kontakcie.
              </li>
            </ul>
          </li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§4 Informacje dodatkowe</h2>
        <ul className='list-disc list-inside'>
          <li>
            W przypadku opóźnień w dostawie wynikających z przyczyn niezależnych od sklepu (np.
            problemy logistyczne przewoźnika), klient zostanie poinformowany o zaistniałej sytuacji.
          </li>
          <li>
            W razie pytań dotyczących dostawy prosimy o kontakt pod adresem e-mail:{' '}
            <strong>macaron.labs@gmail.com</strong> lub telefonicznie pod numerem:{' '}
            <strong>785 075 569</strong>.
          </li>
        </ul>
      </div>
    </div>
  )
}
