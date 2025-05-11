import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zwroty',
  description:
    'Zapoznaj się z informacjami o zwrotach produktów zakupionych w naszym sklepie internetowym.',
}

export default function Zwroty() {
  return (
    <div className='flex flex-col gap-6 p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl-semi text-ui-fg-base'>Zwroty</h1>
      <div className='text-ui-fg-subtle leading-relaxed'>
        <h2 className='text-xl-semi mt-4'>§1 Prawo do zwrotu</h2>
        <ul className='list-disc list-inside'>
          <li>
            Klient ma prawo do zwrotu zakupionych produktów w terminie <strong>14 dni</strong> od
            daty otrzymania przesyłki, bez podania przyczyny.
          </li>
          <li>
            Prawo do zwrotu przysługuje wyłącznie konsumentom, zgodnie z przepisami ustawy o prawach
            konsumenta.
          </li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§2 Warunki zwrotu</h2>
        <ul className='list-disc list-inside'>
          <li>
            Produkt musi być zwrócony w stanie nienaruszonym, bez śladów użytkowania, w oryginalnym
            opakowaniu (jeśli dotyczy).
          </li>
          <li>Zwrotowi nie podlegają produkty:</li>
          <ul className='list-disc list-inside ml-6'>
            <li>Uszkodzone z winy klienta,</li>
            <li>Spersonalizowane lub wykonane na specjalne zamówienie klienta.</li>
          </ul>
        </ul>

        <h2 className='text-xl-semi mt-4'>§3 Procedura zwrotu</h2>
        <ul className='list-disc list-inside'>
          <li>
            Aby dokonać zwrotu, klient powinien:
            <ul className='list-disc list-inside ml-6'>
              <li>
                Skontaktować się z obsługą sklepu za pomocą e-maila:{' '}
                <strong>macaron.labs@gmail.com</strong>,
              </li>
              <li>Wypełnić formularz zwrotu i dołączyć go do przesyłki.</li>
            </ul>
          </li>
          <li>
            Produkt należy odesłać na adres firmy: <strong>80-297 Banino, ul. Ogrodowa 27/2</strong>
            .
          </li>
          <li>
            Koszty przesyłki zwrotnej ponosi klient, chyba że zwrot wynika z błędu sklepu (np.
            wysłanie niewłaściwego produktu).
          </li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§4 Zwrot środków</h2>
        <ul className='list-disc list-inside'>
          <li>
            Zwrot środków następuje w terminie <strong>14 dni</strong> od daty otrzymania zwróconego
            produktu przez sklep.
          </li>
          <li>
            Zwrot środków jest dokonywany na ten sam sposób płatności, który został użyty podczas
            składania zamówienia, chyba że klient wyrazi zgodę na inną formę zwrotu.
          </li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§5 Kontakt w sprawie zwrotów</h2>
        <ul className='list-disc list-inside'>
          <li>
            W razie pytań dotyczących zwrotów prosimy o kontakt:
            <ul className='list-disc list-inside ml-6'>
              <li>
                <strong>E-mail</strong>: <strong>macaron.labs@gmail.com</strong>,
              </li>
              <li>
                <strong>Telefon</strong>: <strong>785 075 569</strong>.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h2 className='text-3xl-semi text-ui-fg-base'>Wzór formularza:</h2>
      <div className='text-ui-fg-subtle leading-relaxed'>
        <p>
          Wypełnij poniższy formularz i dołącz go do przesyłki zwrotnej. W razie pytań skontaktuj
          się z nami:
        </p>
        <ul className='list-disc list-inside'>
          <li>
            <strong>E-mail:</strong> macaron.labs@gmail.com
          </li>
          <li>
            <strong>Telefon:</strong> 785 075 569
          </li>
        </ul>
        <p>
          Adres do zwrotu:{' '}
          <strong>macaron.labs Marcin Kasperski, 80-297 Banino, ul. Ogrodowa 27/2</strong>
        </p>

        <h2 className='text-xl-semi mt-4'>Formularz Zwrotu</h2>
        <p>
          <strong>Data:</strong> ___________________________
        </p>

        <h3 className='text-lg-semi mt-4'>Dane klienta:</h3>
        <p>Imię i nazwisko: _________________________</p>
        <p>Adres: ___________________________________</p>
        <p>Numer telefonu: __________________________</p>
        <p>Adres e-mail: ____________________________</p>

        <h3 className='text-lg-semi mt-4'>Dane zamówienia:</h3>
        <p>Numer zamówienia: ________________________</p>
        <p>Data zakupu: _____________________________</p>

        <h3 className='text-lg-semi mt-4'>Zwrot produktu:</h3>
        <p>Nazwa produktu: __________________________</p>
        <p>Ilość: ___________________________________</p>
        <p>Powód zwrotu:</p>
        <ul className='list-disc list-inside ml-6'>
          <li>( ) Produkt niezgodny z zamówieniem</li>
          <li>( ) Produkt uszkodzony</li>
          <li>( ) Rezygnacja z zakupu</li>
          <li>( ) Inne: __________________________</li>
        </ul>

        <h3 className='text-lg-semi mt-4'>Preferowany sposób rozwiązania:</h3>
        <ul className='list-disc list-inside ml-6'>
          <li>( ) Zwrot pieniędzy</li>
          <li>( ) Wymiana na inny produkt</li>
          <li>( ) Inne: __________________________</li>
        </ul>

        <h3 className='text-lg-semi mt-4'>Dane do zwrotu środków (jeśli dotyczy):</h3>
        <p>Numer konta bankowego: ___________________</p>
        <p>Imię i nazwisko właściciela konta: _______</p>

        <h3 className='text-lg-semi mt-4'>Uwagi klienta:</h3>
        <p>__________________________________________</p>
        <p>__________________________________________</p>

        <h3 className='text-lg-semi mt-4'>Podpis klienta:</h3>
        <p>__________________________________________</p>
      </div>
    </div>
  )
}
