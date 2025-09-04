import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka ciasteczek',
  description: 'Zapoznaj się z polityką ciasteczek naszego sklepu internetowego.',
}

export default function Ciasteczka() {
  return (
    <div className='flex flex-col gap-6 p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl-semi text-ui-fg-base'>Polityka Ciasteczek</h1>
      <div className='text-ui-fg-subtle leading-relaxed'>
        <h2 className='text-xl-semi mt-4'>§1 Postanowienia ogólne</h2>
        <p>
          Niniejsza Polityka Ciasteczek określa zasady przechowywania i dostępu do informacji na
          urządzeniach użytkownika za pomocą plików cookies w związku z korzystaniem ze strony
          internetowej sklepu <strong>macaron.labs Marcin Kasperski</strong>.
        </p>
        <p>
          Administratorem strony internetowej jest firma{' '}
          <strong>macaron.labs Marcin Kasperski</strong>, z siedzibą pod adresem: 80-297 Banino, ul.
          Ogrodowa 27/2, NIP: 9570950393, REGON: 387773699.
        </p>

        <h2 className='text-xl-semi mt-4'>§2 Czym są pliki cookies?</h2>
        <p>
          Pliki cookies to niewielkie pliki tekstowe, które są przechowywane na urządzeniu
          użytkownika (np. komputerze, tablecie, smartfonie) podczas korzystania ze strony
          internetowej.
        </p>
        <p>
          Pliki cookies pozwalają stronie internetowej rozpoznać urządzenie użytkownika i dostosować
          jej działanie do jego preferencji.
        </p>

        <h2 className='text-xl-semi mt-4'>§3 Rodzaje plików cookies</h2>
        <ul className='list-disc list-inside'>
          <li>
            <strong>Cookies sesyjne</strong> – są przechowywane na urządzeniu użytkownika do momentu
            wylogowania się ze strony lub zamknięcia przeglądarki.
          </li>
          <li>
            <strong>Cookies trwałe</strong> – pozostają na urządzeniu użytkownika przez określony
            czas lub do momentu ich usunięcia przez użytkownika.
          </li>
          <li>
            <strong>Cookies własne</strong> – ustawiane przez stronę internetową sklepu.
          </li>
          <li>
            <strong>Cookies zewnętrzne</strong> – ustawiane przez podmioty trzecie, takie jak
            dostawcy narzędzi analitycznych (np. Google Analytics) lub reklamowych.
          </li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§4 Cele wykorzystywania plików cookies</h2>
        <p>Pliki cookies są wykorzystywane w następujących celach:</p>
        <ul className='list-disc list-inside'>
          <li>Zapewnienie prawidłowego działania strony internetowej,</li>
          <li>Zapamiętywanie preferencji użytkownika (np. język strony, zawartość koszyka),</li>
          <li>Analiza statystyk odwiedzin strony (np. za pomocą Google Analytics),</li>
          <li>Personalizacja treści i reklam,</li>
          <li>Umożliwienie logowania i obsługi konta użytkownika.</li>
        </ul>

        <h2 className='text-xl-semi mt-4'>§5 Zarządzanie plikami cookies</h2>
        <p>
          Użytkownik ma możliwość zarządzania plikami cookies za pomocą ustawień swojej przeglądarki
          internetowej.
        </p>
        <p>
          Użytkownik może w każdej chwili usunąć pliki cookies lub zablokować ich automatyczne
          zapisywanie w ustawieniach przeglądarki.
        </p>
        <p>
          Ograniczenie stosowania plików cookies może wpłynąć na niektóre funkcjonalności strony
          internetowej.
        </p>

        <h2 className='text-xl-semi mt-4'>§6 Pliki cookies podmiotów trzecich</h2>
        <p>Strona internetowa sklepu korzysta z plików cookies podmiotów trzecich, takich jak:</p>
        <ul className='list-disc list-inside'>
          <li>
            <strong>Google Analytics</strong> – w celu analizy statystyk odwiedzin,
          </li>
          <li>
            <strong>Facebook Pixel</strong> – w celu personalizacji reklam,
          </li>
          <li>
            <strong>PayU</strong> – w celu obsługi płatności.
          </li>
        </ul>
        <p>
          Szczegółowe informacje na temat plików cookies podmiotów trzecich znajdują się w
          politykach prywatności tych podmiotów.
        </p>

        <h2 className='text-xl-semi mt-4'>§7 Zmiany w Polityce Ciasteczek</h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Ciasteczek w
          przypadku zmiany przepisów prawa lub technologii.
        </p>
        <p>Aktualna wersja Polityki Ciasteczek jest zawsze dostępna na stronie sklepu.</p>

        <h2 className='text-xl-semi mt-4'>§8 Kontakt</h2>
        <p>
          W przypadku pytań dotyczących Polityki Ciasteczek prosimy o kontakt pod adresem e-mail:{' '}
          <strong>macaron.labs@gmail.com</strong>.
        </p>
      </div>
    </div>
  )
}
