import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulamin sklepu',
  description: 'Zapoznaj się z regulaminem naszego sklepu internetowego.',
}

export default function Regulamin() {
  return (
    <div className='flex flex-col gap-6 p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl-semi text-ui-fg-base'>Regulamin sklepu</h1>
      <div className='text-ui-fg-subtle leading-relaxed'>
        <p>Regulamin sklepu internetowego pika space</p>
        <h2 className='text-xl-semi mt-4'>§1 Postanowienia ogólne</h2>
        <p>
          Sklep internetowy prowadzony jest przez firmę macaron.labs Marcin Kasperski, z siedzibą
          pod adresem: 80-297 Banino, ul. Ogrodowa 27/2, NIP: 9570950393, REGON: 387773699.
        </p>
        <p>
          Kontakt ze sklepem możliwy jest pod adresem e-mail: macaron.labs@gmail.com lub
          telefonicznie pod numerem: 785 075 569.
        </p>
        <p>
          Regulamin określa zasady korzystania ze sklepu internetowego, składania zamówień,
          realizacji zamówień, płatności, dostawy, zwrotów i reklamacji.
        </p>
        <h2 className='text-xl-semi mt-4'>§2 Oferta sklepu</h2>
        <p>
          Sklep internetowy prowadzi sprzedaż produktów związanych z marką Pokemon, w tym kart,
          zabawek i innych akcesoriów.
        </p>
        <p>Wszystkie produkty oferowane w sklepie są nowe, oryginalne i wolne od wad.</p>
        <h2 className='text-xl-semi mt-4'>§3 Składanie zamówień</h2>
        <p>Zamówienia można składać za pośrednictwem strony internetowej sklepu.</p>
        <p>W celu złożenia zamówienia klient zobowiązany jest podać następujące dane:</p>
        <ul className='list-disc list-inside'>
          <li>Imię i nazwisko,</li>
          <li>Adres dostawy,</li>
          <li>Nazwę firmy (jeśli dotyczy),</li>
          <li>Adres e-mail,</li>
          <li>Numer telefonu.</li>
        </ul>
        <p>Podanie danych jest niezbędne do realizacji zamówienia oraz wystawienia faktury.</p>
        <h2 className='text-xl-semi mt-4'>§4 Płatności</h2>
        <p>Sklep akceptuje następujące metody płatności:</p>
        <ul className='list-disc list-inside'>
          <li>Przelew bankowy,</li>
          <li>BLIK,</li>
          <li>Karta płatnicza,</li>
          <li>Google Pay,</li>
          <li>Apple Pay.</li>
        </ul>
        <p>Płatności obsługiwane są za pośrednictwem systemu PayU.</p>
        <p>Zamówienie zostanie zrealizowane po zaksięgowaniu płatności na koncie sklepu.</p>
        <p>
          Możliwe jest także wykonanie standardowego przelewu bankowego (przy wyborze metody
          “Przelew tradycyjny”).
        </p>
        <h2 className='text-xl-semi mt-4'>§5 Dostawa</h2>
        <p>
          Dostawa zamówionych produktów realizowana jest za pośrednictwem firmy InPost i urządzeń
          Paczkomat®.
        </p>
        <p>
          Możliwy jest także odbiór osobisty po wcześniejszym ustaleniu za pomocą maila lub mediów
          społecznościowych.
        </p>
        <p>
          Koszty dostawy są podawane podczas składania zamówienia i zależą od wybranej metody
          dostawy.
        </p>
        <h2 className='text-xl-semi mt-4'>§6 Zwroty i reklamacje</h2>
        <p>
          Klient ma prawo do zwrotu zakupionych produktów w terminie 14 dni od daty otrzymania
          przesyłki, bez podania przyczyny.
        </p>
        <p>Zwroty należy przesyłać na adres firmy: 80-297 Banino, ul. Ogrodowa 27/2.</p>
        <p>Reklamacje można zgłaszać:</p>
        <ul className='list-disc list-inside'>
          <li>Mailowo na adres: macaron.labs@gmail.com,</li>
          <li>Za pośrednictwem konta użytkownika w sklepie.</li>
        </ul>
        <p>Reklamacje będą rozpatrywane w terminie 14 dni od daty ich zgłoszenia.</p>
        <h2 className='text-xl-semi mt-4'>§7 Ochrona danych osobowych</h2>
        <p>
          Administratorem danych osobowych klientów jest firma macaron.labs Marcin Kasperski. Dane
          osobowe przetwarzane są w celu realizacji zamówień, wystawienia faktur oraz kontaktu z
          klientem.
        </p>
        <p>
          Klient ma prawo do wglądu w swoje dane, ich poprawiania oraz żądania ich usunięcia.
          Szczegółowe informacje na temat przetwarzania danych osobowych znajdują się w Polityce
          Prywatności dostępnej na stronie sklepu.
        </p>
        <h2 className='text-xl-semi mt-4'>§8 Postanowienia końcowe</h2>
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
          polskiego, w szczególności Kodeksu cywilnego oraz ustawy o prawach konsumenta.
        </p>
        <p>Regulamin wchodzi w życie z dniem 11.05.2025 i obowiązuje do odwołania.</p>
      </div>
    </div>
  )
}
