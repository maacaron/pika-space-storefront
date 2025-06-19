import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Zapoznaj się z polityką prywatności naszego sklepu internetowego.',
}

export default function RODO() {
  return (
    <div className='flex flex-col gap-6 p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl-semi text-ui-fg-base'>Polityka prywatności</h1>
      <div className='text-ui-fg-subtle leading-relaxed'>
        <h2 className='text-xl-semi mt-4'>§1 Postanowienia ogólne</h2>
        <p>
          Administratorem danych osobowych jest firma macaron.labs Marcin Kasperski, z siedzibą pod
          adresem: 80-297 Banino, ul. Ogrodowa 27/2, NIP: 9570950393, REGON: 387773699.
        </p>
        <p>
          Kontakt z administratorem możliwy jest pod adresem e-mail: macaron.labs@gmail.com lub
          telefonicznie pod numerem: 459 116 567.
        </p>
        <p>
          Dane osobowe przetwarzane są zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego
          i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz innymi obowiązującymi
          przepisami prawa.
        </p>
        <h2 className='text-xl-semi mt-4'>§2 Zakres przetwarzanych danych</h2>
        <p>Administrator przetwarza następujące dane osobowe:</p>
        <ul className='list-disc list-inside'>
          <li>Imię i nazwisko,</li>
          <li>Adres dostawy,</li>
          <li>Nazwę firmy (jeśli dotyczy),</li>
          <li>Adres e-mail,</li>
          <li>Numer telefonu,</li>
          <li>Dane dotyczące płatności (np. numer konta bankowego, szczegóły transakcji).</li>
        </ul>
        <p>Dane te są zbierane podczas:</p>
        <ul className='list-disc list-inside'>
          <li>Składania zamówienia w sklepie,</li>
          <li>Rejestracji konta użytkownika,</li>
          <li>Kontaktowania się z administratorem (np. za pośrednictwem e-maila).</li>
        </ul>
        <h2 className='text-xl-semi mt-4'>§3 Cele przetwarzania danych</h2>
        <p>Dane osobowe przetwarzane są w następujących celach:</p>
        <ul className='list-disc list-inside'>
          <li>Realizacja zamówień i dostawa produktów,</li>
          <li>Wystawianie faktur i obsługa płatności,</li>
          <li>Obsługa reklamacji i zwrotów,</li>
          <li>Kontakt z klientem w sprawach związanych z realizacją zamówienia,</li>
          <li>Marketing bezpośredni (np. wysyłka newslettera) – wyłącznie za zgodą klienta.</li>
        </ul>
        <h2 className='text-xl-semi mt-4'>§4 Podstawa prawna przetwarzania danych</h2>
        <p>Dane osobowe przetwarzane są na podstawie:</p>
        <ul className='list-disc list-inside'>
          <li>Art. 6 ust. 1 lit. b RODO – w celu realizacji umowy (np. realizacja zamówienia),</li>
          <li>
            Art. 6 ust. 1 lit. c RODO – w celu wypełnienia obowiązków prawnych (np. wystawianie
            faktur),
          </li>
          <li>
            Art. 6 ust. 1 lit. a RODO – na podstawie zgody klienta (np. w przypadku marketingu
            bezpośredniego).
          </li>
        </ul>
        <h2 className='text-xl-semi mt-4'>§5 Udostępnianie danych</h2>
        <p>Dane osobowe mogą być udostępniane następującym podmiotom:</p>
        <ul className='list-disc list-inside'>
          <li>Firmom kurierskim i dostawcom (InPost) – w celu dostarczenia zamówienia,</li>
          <li>Operatorom płatności (PayU) – w celu obsługi płatności,</li>
          <li>
            Podmiotom świadczącym usługi księgowe, prawne lub IT – w zakresie niezbędnym do
            realizacji tych usług.
          </li>
        </ul>
        <p>
          Dane osobowe mogą być przekazywane poza Europejski Obszar Gospodarczy (EOG), w tym do
          Stanów Zjednoczonych, w celu przechowywania danych na serwerach lub w bazach danych. W
          takich przypadkach zapewniamy odpowiednie zabezpieczenia, takie jak standardowe klauzule
          umowne (SCC), aby chronić dane osobowe zgodnie z wymogami RODO.
        </p>
        <h2 className='text-xl-semi mt-4'>§6 Okres przechowywania danych</h2>
        <p>Dane osobowe przechowywane są przez okres:</p>
        <ul className='list-disc list-inside'>
          <li>Niezbędny do realizacji zamówienia i obsługi klienta,</li>
          <li>Wymagany przepisami prawa (np. w celach podatkowych i rachunkowych),</li>
          <li>
            Do momentu wycofania zgody przez klienta (w przypadku przetwarzania na podstawie zgody).
          </li>
        </ul>
        <h2 className='text-xl-semi mt-4'>§7 Prawa osób, których dane dotyczą</h2>
        <p>Klient ma prawo do:</p>
        <ul className='list-disc list-inside'>
          <li>Dostępu do swoich danych osobowych,</li>
          <li>Sprostowania (poprawienia) swoich danych,</li>
          <li>Usunięcia danych („prawo do bycia zapomnianym”),</li>
          <li>Ograniczenia przetwarzania danych,</li>
          <li>Przenoszenia danych do innego administratora,</li>
          <li>Wniesienia sprzeciwu wobec przetwarzania danych,</li>
          <li>
            Wycofania zgody na przetwarzanie danych (jeśli przetwarzanie odbywa się na podstawie
            zgody).
          </li>
        </ul>
        <p>
          W celu realizacji swoich praw klient może skontaktować się z administratorem pod adresem
          e-mail: macaron.labs@gmail.com.
        </p>
        <p>
          Klient ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO),
          jeśli uzna, że przetwarzanie danych narusza przepisy RODO.
        </p>
        <h2 className='text-xl-semi mt-4'>§8 Pliki cookies</h2>
        <p>Sklep internetowy wykorzystuje pliki cookies w celu:</p>
        <ul className='list-disc list-inside'>
          <li>Umożliwienia prawidłowego działania strony,</li>
          <li>Analizy statystyk odwiedzin,</li>
          <li>Personalizacji treści i reklam.</li>
        </ul>
        <p>
          Klient może zarządzać plikami cookies za pomocą ustawień swojej przeglądarki internetowej.
        </p>
        <h2 className='text-xl-semi mt-4'>§9 Postanowienia końcowe</h2>
        <p>
          Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności w
          przypadku zmiany przepisów prawa lub technologii.
        </p>
        <p>Aktualna wersja Polityki Prywatności jest zawsze dostępna na stronie sklepu.</p>
      </div>
    </div>
  )
}
