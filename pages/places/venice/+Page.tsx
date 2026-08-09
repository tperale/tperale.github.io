import mapStyle from "../../../components/Map/map-style.json"
import { Divider } from "../../../components/Divider"
import { Title } from "../../../components/Title"
import { Card, CardContainer } from "../../../components/Card"
import { CardImg, CardTitle, CardDescription } from "../../../components/Card"
import { MapComponent, Point } from "../../../components/Map"
import { MapWithContextProvider } from "../../../providers/MapWithContext"
import { InlineLink } from "../../../components/Link"

import headerImage from "./assets/header.jpg"

const MAP_CENTER: [number, number] = [12.34, 45.435]
const MAP_ZOOM = 12

export function Header() {
  return (
    <CardContainer columns={3}>
      <Card>
        <CardImg src={headerImage} dotted={true} />
      </Card>
      <Card span={2}>
        <CardTitle>Venice — Italy</CardTitle>
        <CardDescription>
          Venice is an overwhelmingly crowded area. The city is an open-air
          museum and by just getting lost you will end up in really nice areas.
          <br />
          However, by just walking around you will notice that you often
          naturally end up in the same big streets and might pass just next to
          some nice places.
          <br />I have the chance to regularly visit the city. Every time I go I
          discover new places, visit new expos. This page is a good way to save
          some of those addresses and make them easily browsable.
          <br />
          This page contains addresses I visited and liked or just passed by and
          told myself 'this looks nice'. It also includes museums or foundations
          I visited and Biennale 2026 addresses.
        </CardDescription>
      </Card>
    </CardContainer>
  )
}

export function Content() {
  return (
    <>
      <p>
        There is a{" "}
        <a href="https://www.comune.venezia.it/it/content/tourist-tax-information-guests">
          tourist tax
        </a>{" "}
        that now applies when you visit the city. It's really likely that you
        will be checked if you get to Venice from the railway station area.
        Check the period when the entrance fee applies and make sure to pay it
        in advance. It gets more expensive the closer you book it.
      </p>
      <p>
        If you sit at a bar, watch out for the 'tourist' price. If you don't see
        the price mentioned clearly on a menu you will pay a big markup on the
        price.
      </p>
      <p>
        In Italian restaurants you pay for the 'coperto' (plates, cutlery, etc.
        ...). It's usually pretty low but it's a known tourist scam to bump the
        coperto. Make sure to check it before sitting somewhere to avoid a
        surprise.
      </p>
      <Title>Locations</Title>
      <MapWithContextProvider>
        <MapComponent style={mapStyle} center={MAP_CENTER} zoom={MAP_ZOOM} />
        <Divider>Museum / Fondazione</Divider>
        <CardContainer>
          <Point
            title="Negozio Olivetti"
            subtitle="P.za San Marco, 101, 30124 Venezia VE, Italie"
            location={[12.3374749, 45.4341923]}
            description="Olivetti showroom designed by Carlo Scarpa."
            tags={["museum", "Carlo Scarpa"]}
            href={{
              Maps: "https://maps.app.goo.gl/EHYXLXbpp44r47BS7",
              Website: "https://fondoambiente.it/luoghi/negozio-olivetti",
            }}
          />
          <Point
            title="Espace Louis Vuitton"
            subtitle="Calle del Ridotto, 1351, 30124 Venezia VE, Italie"
            location={[12.3339461, 45.4329944]}
            description="Located on top of the Louis Vuitton store, you can access from a small entrance on the right side to not have to enter the store. It holds small temporary expos."
            tags={["museum", "gallery"]}
            href={"https://maps.app.goo.gl/eUnSk7s89KFSnNor7"}
          />
          <Point
            title="Fondazione Dries Van Noten"
            subtitle="S. Polo, 2766, 30125 Venezia VE, Italie"
            location={[12.3290492, 45.4359892]}
            description="Reservation needed."
            tags={["museum"]}
            href={{
              Maps: "https://maps.app.goo.gl/fG7UfwnFMeLWbomb8",
              Website: "https://fondazionedriesvannoten.org/en",
            }}
          />
          <Point
            title="Collection Peggy Guggenheim"
            subtitle="Dorsoduro, 701, 30123 Venezia VE, Italie"
            location={[12.3314271, 45.4308311]}
            description="Art collection."
            tags={["museum", "gallery"]}
            href={{
              Maps: "https://maps.app.goo.gl/GxnR1wudd4uTcSJ28",
              Website: "https://www.guggenheim-venice.it/it/",
            }}
          />
          <Point
            title="Fondation Pinault — Punta Della Dogana"
            location={[12.3356434, 45.4309311]}
            description="Regular big exposition. Renovated by Tadao Ando. An entrance here also gives you the right to visit the Palazzo Grassi."
            tags={["museum"]}
            href={{
              Maps: "https://maps.app.goo.gl/iKQwP4VU6NJFSc6f6",
              Website:
                "https://www.pinaultcollection.com/palazzograssi/en/programme?date=all&type=all&audience=all&section=pdd",
            }}
          />
          <Point
            title="Fondation Pinault — Palazzo Grassi"
            location={[12.3276493, 45.4337535]}
            description="Regular big exposition. Part of the Fondation Pinault."
            tags={["museum"]}
            href={{
              Maps: "https://maps.app.goo.gl/kWxGWWsy2y95Gppb7",
              Website: "https://www.pinaultcollection.com/palazzograssi/en",
            }}
          />
          <Point
            title="Le Stanze della Fotografia"
            location={[12.3454876, 45.4289756]}
            description="Photography museum on San Giorgio island. You need to take the vaporetto to get there."
            tags={["museum"]}
            href={{
              Maps: "https://maps.app.goo.gl/JqWCk5dgoRRSzryD9",
              Website: "https://lestanzedellafotografia.it/it/",
            }}
          />
        </CardContainer>
        <Divider>Food, Drink & Bacari</Divider>
        <p>
          {"Bacari are the typical small bars in Venice. Here you can find finger food (cicchetti), small glasses of wine (ombra). " +
            "You can also most of the time find sandwiches to go that you can keep in your backpack for later."}
        </p>
        <CardContainer>
          <Point
            title="Bacareto da Lele"
            subtitle="Fondamenta dei Tolentini, 183, 30100 Venezia VE, Italie"
            location={[12.3211937, 45.4374965]}
            color="FireBrick"
            description="Probably one of the most known bacari. It's really famous and always crowded with long queues. You can find extremely cheap food and drink. The area nearby is often animated during the evening."
            tags={["drink"]}
            href={"https://maps.app.goo.gl/kztL51bxeriww3UW8"}
          />
          <Point
            title="Hostaria Vecio Biavarol"
            subtitle="Santa Croce, 225, 30135 Venezia VE, Italie"
            location={[12.321402, 45.4386267]}
            color="FireBrick"
            description="Elevated cichetti and local wines."
            tags={["drink"]}
            href="https://maps.app.goo.gl/e1kMwgQFw4EDym777"
          />
          <Point
            title="Angolo del gusto"
            subtitle="Santa Croce Venezia 190/B, 30135 Venezia VE, Italie"
            location={[12.321622, 45.4377713]}
            color="FireBrick"
            description="Pizzette, focaccia, tramezzini, good pit stop to your lunch if you come from the ferrovia."
            tags={["drink", "food"]}
            href="https://maps.app.goo.gl/R88YLJUXnbn5Ho7M7"
          />
          <Point
            title="Osteria Ai Pugni"
            subtitle="Fondamenta Gherardini, 2836, 30125 Venezia VE, Italie"
            location={[12.3242377, 45.4330187]}
            color="FireBrick"
            description="Good wine selection, typical venetian dishes."
            tags={["drink", "food"]}
            href="https://maps.app.goo.gl/vhxP9obakDBBFtEEA"
          />
          <Point
            title="Corner Pub"
            subtitle="Calle de la Chiesa, 684, 30123 Venezia VE, Italie"
            location={[12.3305963, 45.4304342]}
            color="FireBrick"
            description="Cheap spritz and drinks. Good stop if going to the Guggenheim collection or Fondation Pinault. Reachable by foot with the Academia bridge."
            tags={["drink"]}
            href="https://maps.app.goo.gl/jED1yiL4fjADseyN8"
          />
          <Point
            title="Vino Vero"
            subtitle="Fondamenta de la Misericordia, 2497, 30100 Venezia VE, Italie"
            location={[12.332861, 45.4440562]}
            color="FireBrick"
            description="Fine local wine bar with finger food available."
            tags={["drink"]}
            href="https://maps.app.goo.gl/9ZdTqtFGvuskEfZ39"
          />
          <Point
            title="La Sete"
            subtitle="Calle Larga, 2555, 30121 Venezia VE, Italie"
            location={[12.3316729, 45.4448112]}
            color="FireBrick"
            description="Wine bar with cicchetti."
            tags={["drink"]}
            href="https://maps.app.goo.gl/djTfWFNCsekh91zd8"
          />
          <Point
            title="Ae Bricoe"
            subtitle="Fondamenta dei Ormesini, 2684, 30121 Venezia VE, Italie"
            location={[12.3291606, 45.4453463]}
            color="FireBrick"
            description="Bacaro, cicchetti available and drinks."
            tags={["drink"]}
            href="https://maps.app.goo.gl/cR2JQh1yzpLxz1Gg6"
          />
          <Point
            title="Estro - Pane e vino"
            subtitle="Fondamenta dei Ormesini, 2831, 30121 Venezia VE, Italie"
            location={[12.327297, 45.4458403]}
            color="FireBrick"
            description="Wine bar, a bit on the pricey side but with high quality elevated bites available."
            tags={["drink"]}
            href="https://maps.app.goo.gl/7eEXcjsCW6ogS7H38"
          />
          <Point
            title="Bea Vita"
            subtitle="Fondamenta de le Capuzine, 3082, 30121 Venezia VE, Italie"
            location={[12.325391, 45.4463194]}
            color="FireBrick"
            description="Simple local food and wines."
            tags={["drink", "food"]}
            href="https://maps.app.goo.gl/sWiCzWs7UhPaLeDQA"
          />
          <Point
            title="Succede. La Vineria"
            subtitle="Calle de la Laca, 2465f, 30125 Venezia VE, Italie"
            location={[12.3241828, 45.4385872]}
            color="FireBrick"
            description="Fine local wine bar, finger food and day menu."
            tags={["drink"]}
            href="https://maps.app.goo.gl/okCVN2iDigya67c29"
          />
          <Point
            title="Enoteca Al Volto"
            subtitle="C. Cavalli, 4081, 30124 Venezia VE, Italie"
            location={[12.3305963, 45.436092]}
            color="FireBrick"
            description="Typical venetian dishes and drinks."
            tags={["drink", "food"]}
            href="https://maps.app.goo.gl/qBe1bxjXeXt3PA3o6"
          />
          <Point
            title="La Bottiglia"
            subtitle="Campo S. Stin, 2537, 30125 Venezia VE, Italie"
            location={[12.3272055, 45.4377908]}
            color="FireBrick"
            description="Fine local wine bar with finger food available."
            tags={["drink"]}
            href="https://maps.app.goo.gl/Yju4U9jtQX89yP746"
          />
          <Point
            title="Caffe Rosso"
            subtitle="Sestiere Dorsoduro, 2963, 30123 Venezia VE, Italie"
            location={[12.3234157, 45.4344875]}
            color="FireBrick"
            description="Nice caffe in a nice location."
            tags={["drink"]}
            href="https://maps.app.goo.gl/EyTP4bBvwN1mDEHfA"
          />
          <Point
            title="Cantina Aziende Agricole"
            subtitle="Rio Terà Farsetti, 1847/A, 30121 Venezia VE, Italie"
            location={[12.3289799, 45.4447316]}
            color="FireBrick"
            description="Wine bar, finger food and small dishes"
            tags={["drink", "food"]}
            href="https://maps.app.goo.gl/2BjdvrmMP4fRtvS27"
          />
        </CardContainer>
        <Divider>Ice Cream & Sweets</Divider>
        <CardContainer>
          <Point
            title="Gelateria il Doge"
            subtitle="Sestiere Dorsoduro, 3058/A, 30123 Venezia VE, Italie"
            location={[12.3239612, 45.433811]}
            description="It's a small chain, you can find multiple location exists with the same name."
            color="CornflowerBlue"
            tags={["gelato"]}
            href="https://maps.app.goo.gl/h4VS5nKF7R4hD4BX8"
          />
          <Point
            title="Suso"
            subtitle="Sotoportego de la Bissa, 5453, 30124 Venezia VE, Italie"
            location={[12.3372712, 45.4377033]}
            color="CornflowerBlue"
            tags={["gelato"]}
            href="https://maps.app.goo.gl/MbTbsiGCvPoZUWC7A"
          />
          <Point
            title="Pasticceria Tonolo"
            subtitle="Calle S. Pantalon, 3764, 30123 Venezia VE, Italie"
            location={[12.3250632, 45.435993]}
            color="CornflowerBlue"
            description="Typical italian pastries."
            tags={["pastries"]}
            href="https://maps.app.goo.gl/yxRR3QShW5GueeJ79"
          />
        </CardContainer>
        <Divider>Places</Divider>
        <CardContainer>
          <Point
            title="Cimitero di San Michele"
            location={[12.3460659, 45.4466254]}
            description="Cemetery of Venice has its own island. Worth a visit, you will of course have to take the vaporetto."
            tags={["To Visit"]}
          />
          <Point
            title="Monastero Armeno Mechitarista"
            location={[12.3610087, 45.4121364]}
            description="You need to book your visit in advance."
            tags={["To Visit"]}
            href="https://sites.google.com/view/sanlazzarodegliarmeni/san-lazzaro-degli-armeni"
          />
          <Point
            title="La Certosa"
            description="An island with almost nothing on it. You might find art pieces from the biennale. The remains of the old monastery are still visible. Worth a walk to escape the crowds of the city."
            location={[12.37076, 45.4324094]}
            tags={["To Visit"]}
          />
          <Point
            title="Lido"
            description="Closest beach from Venice. Nice to take a day off if you stay multiple days."
            location={[12.3780629, 45.4142634]}
            tags={["To Visit"]}
          />
        </CardContainer>
        <Divider>Biennale 2026, National Pavillon & Off</Divider>
        <CardContainer>
          <Point
            title="Anish Kapoor - Palazzo Manfrin"
            subtitle="Fondamenta Venier, 342, 30121 Venezia VE, Italie"
            description=""
            location={[12.3247588, 45.4437842]}
            color="DarkSlateGray"
            tags={["Biennale 2026"]}
            href={{
              Ticket:
                "https://biglietteria.culturatela.it/dettaglio-spettacolo.php?negozio_spettacolo_id=187",
            }}
          />
          <Point
            title="Canicula"
            subtitle="complesso dell’ospedaletto"
            description="Must-see free exhibition in an old hospital. Multiple films shown. Takes quite some time to see everything."
            location={[12.3430083, 45.4391692]}
            color="DarkSlateGray"
            tags={["Biennale 2026"]}
            href={{
              Website: "https://inbetweenartfilm.com/en/canicula/",
            }}
          />
        </CardContainer>
      </MapWithContextProvider>
      <Title>Other References</Title>
      <ul>
        <li>
          <InlineLink href="https://spacedelicious.com/pages/veneto">
            spacedelicious.com
          </InlineLink>
        </li>
      </ul>
    </>
  )
}

export default function Page() {
  return (
    <>
      <Title>Venezia Locations and Bookmarks</Title>
      <Header />
      <Content />
    </>
  )
}
