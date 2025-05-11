import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reklamacje',
  description:
    'Zapoznaj się z informacjami o reklamacjach produktów zakupionych w naszym sklepie internetowym.',
}

export default function Reklamacje() {
  return (
    <div className='flex flex-col gap-6 p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl-semi text-ui-fg-base'>Reklamacje</h1>
      <div className='text-ui-fg-subtle leading-relaxed'>
        <h2 className='text-xl-semi mt-4'>§1 Zgłaszanie reklamacji</h2>
        <ul className='list-disc list-inside'>
          <li>
            Klient ma prawo zgłosić reklamację w przypadku stwierdzenia wad fizycznych lub prawnych
            zakupionych produktów.
          </li>
          <li>Reklamacje można zgłaszać w następujący sposób:</li>
          <ul className='list-disc list-inside ml-6'>
            <li>
              <strong>Mailowo</strong>: na adres <strong>macaron.labs@gmail.com</strong>,
            </li>
            <li>
              <strong>Pisemnie</strong>: na adres firmy{' '}
              <strong>80-297 Banino, ul. Ogrodowa 27/2</strong>,
            </li>
            <li>
              <strong>Za pośrednictwem konta użytkownika</strong> w sklepie internetowym.
            </li>
          </ul>
        </ul>

        <h2 className='text-xl-semi mt-4'>§2 Treść zgłoszenia reklamacyjnego</h2>
        <p>W zgłoszeniu reklamacyjnym należy podać następujące informacje:</p>
        <ul className='list-disc list-inside'>
          <li>Imię i nazwisko klienta,</li>
          <li>Numer zamówienia,</li>
          <li>Opis wady produktu,</li>
          <li>
            Preferowany sposób rozwiązania reklamacji (np. wymiana produktu, zwrot pieniędzy).
          </li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§3 Rozpatrywanie reklamacji</h2>
        <ul className='list-disc list-inside'>
          <li>
            Reklamacje są rozpatrywane w terminie <strong>14 dni roboczych</strong> od daty ich
            zgłoszenia.
          </li>
          <li>W przypadku uznania reklamacji, sklep zobowiązuje się do:</li>
          <ul className='list-disc list-inside ml-6'>
            <li>Wymiany produktu na nowy,</li>
            <li>Naprawy produktu,</li>
            <li>Zwrotu kosztów zakupu.</li>
          </ul>
        </ul>

        <h2 className='text-xl-semi mt-4'>§4 Zwrot produktu w ramach reklamacji</h2>
        <ul className='list-disc list-inside'>
          <li>
            W przypadku konieczności zwrotu produktu, klient powinien przesłać go na adres firmy:{' '}
            <strong>80-297 Banino, ul. Ogrodowa 27/2</strong>.
          </li>
          <li>Koszty przesyłki zwrotnej są zwracane klientowi w przypadku uznania reklamacji.</li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§5 Kontakt w sprawie reklamacji</h2>
        <ul className='list-disc list-inside'>
          <li>
            W razie pytań dotyczących procesu reklamacyjnego prosimy o kontakt:
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
    </div>
  )
}
