import mapStyle from "../../../components/Map/map-style.json"
import { Divider } from "../../../components/Divider"
import { Card, CardContainer } from "../../../components/Card"
import { CardImg, CardTitle, CardDescription } from "../../../components/Card"
import {
  MapComponent,
  ImageWithDescPoint,
  Point,
} from "../../../components/Map"
import { MapWithContextProvider } from "../../../providers/MapWithContext"
import { InlineLink } from "../../../components/Link"
import { Title } from "../../../components/Title"
import { Section, StickyColumn, Column } from "../../../components/Layout"

const MAP_CENTER: [number, number] = [12.34, 45.435]
const MAP_ZOOM = 12.5

const assetImages = Object.fromEntries(
  Object.entries(
    import.meta.glob("./assets/**/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    }),
  ).map(([path, src]) => [path.split("/").pop()!, src as string]),
)

export const PlaceImage = assetImages["header.jpg"]
export const PlaceTitle = "Carlo Scarpa — Italy"
export const PlaceDescription = (
  <>
    Carlo Scarpa (1906 – 1978) is a venetian architect and designer. His work
    can be seen in Venice and the north of Italy. Since it was difficult to find
    a proper map that list all the location of the work of Carlo Scarpa online
    this page goal is to serve as an index to locate his work with link to other
    references.
  </>
)

export function Header() {
  return (
    <CardContainer>
      <CardImg src={assetImages["header.jpg"]} dotted={true} />
      <Card>
        <CardTitle>Carlo Scarpa — Italy</CardTitle>
        <CardDescription>
          Carlo Scarpa (1906 – 1978) is a venetian architect and designer.
          Since it was difficult to find a map online that list all the location
          of the work of Carlo Scarpa. This page goal is to serve as an index to
          locate his work with link to other references.
        </CardDescription>
      </Card>
    </CardContainer>
  )
}

export function Content() {
  return (
    <>
      <MapWithContextProvider>
        <Title>The work of Carlo Scarpa in Venice</Title>
        <p>Most of the work of Carlo Scarpa is visible in Venice.</p>
        <Section>
          <StickyColumn>
            <MapComponent
              style={mapStyle}
              center={MAP_CENTER}
              zoom={MAP_ZOOM}
            />
          </StickyColumn>
          <Column>
            <CardContainer padding="0.8rem">
              <Point
                title="Negozio Olivetti"
                subtitle="San Marco"
                location={[12.3374749, 45.4341923]}
                description="Olivetti showroom designed by Carlo Scarpa."
                tags={["showroom"]}
                href={{
                  Maps: "https://maps.app.goo.gl/EHYXLXbpp44r47BS7",
                  Website: "https://fondoambiente.it/luoghi/negozio-olivetti",
                }}
              />
              <Point
                title="Museo Correr"
                subtitle="San Marco"
                location={[12.3369833, 45.4338637]}
                description="Venice art museum. The display for the art pieces were made by Carlo Scarpa."
                tags={["museum"]}
                href={"https://maps.app.goo.gl/Byf8vvVepb3HYU4Z9"}
              />
              <Point
                title="Fondazione Querini Stampalia"
                subtitle=""
                location={[12.3412283, 45.4367324]}
                description="Classical art collection. The restauration of the fondation in 1959 was led by Carlo Scarpa. The garden is probably the most visible signature of the architect. But the style of Carlo Scarpa is visible in multiple location in the museum."
                tags={["museum"]}
                href={{
                  Maps: "https://maps.app.goo.gl/JnDbEc8tFHFesoZWA",
                  Website:
                    "https://www.querinistampalia.org/en/get-your-ticket/",
                }}
              />
              <Point
                title="Ca' Foscari"
                location={[12.3263017, 45.4345248]}
                description="In 1936 and in 1956, Carlo Scarpa is commissioned to restore part of the university. This include the lecture hall "
                href={{
                  Maps: "https://maps.app.goo.gl/zUaxSfuS2wZsBDVx8",
                  Website: "https://www.unive.it/web/en/18412/carlo-scarpa",
                }}
              />
              <Point
                title="Tomba Capovilla"
                subtitle="San Michele Cemetery"
                location={[12.3454442, 45.4466449]}
                description="In the San Michele cemetery of Venice. This is the second funerary command from Carlo Scarpa in 1943."
                tags={["tomb"]}
                href={{
                  Photos:
                    "https://mediateca.palladiomuseum.org/scarpa/web/opere_scheda.php?valo=i_6_125",
                }}
              />
              <Point
                title="Tomba Vettore Rizzo"
                subtitle="San Michele Cemetery"
                location={[12.3455742, 45.4467749]}
                description=""
                tags={["tomb"]}
                href={{
                  Photos:
                    "https://mediateca.palladiomuseum.org/scarpa/web/opere_scheda.php?valo=i_6_124",
                }}
              />
              <Point
                title="University of Architecture of Venice (IUAV) Entrance"
                location={[12.3221446, 45.4377574]}
                description="Renovated in 1985 the entrance of the IUAV is transformed based on Carlo Scarpa design."
                tags={["museum"]}
                href={{
                  Maps: "https://maps.app.goo.gl/vjssvq1nueKS2Suc6",
                  Photos:
                    "https://www.archweb.com/en/gallery/Iuav-University-of-Venice-entrance/",
                }}
              />
              <Point
                title="Venini Murano Shop"
                subtitle="Murano"
                location={[12.3507258, 45.4526835]}
                description="Carlo Scarpa started working for the luxury brand in 1932 as an artistic director. He designed some models for the brand himself. The design of the shop is totally inspired from the work of Scarpa but was designed by Barbara Dela Vicario in 1980."
                tags={["shop"]}
                href={{
                  Maps: "https://maps.app.goo.gl/whWPn8RgUrsqv9ePA",
                  Archive: "https://www.venini.com/en_eu/modular/carlo-scarpa",
                }}
              />
            </CardContainer>
            <Divider>Giardini della Biennale</Divider>
            <CardContainer padding="0.8rem">
              <Point
                title="Biglietteria"
                subtitle="Giardini"
                location={[12.3568682, 45.4290781]}
                description="Ticket booth of the Giadini della Biennale. Nowadays often filled with an art piece."
                href={{
                  Maps: "https://maps.app.goo.gl/3vchucTFcF796bSr9",
                  Photos:
                    "https://www.archweb.com/en/gallery/biennial-ticket-office/",
                }}
              />
              <Point
                title="Venezuela Pavilion"
                subtitle="Giardini"
                location={[12.3572567, 45.428521]}
                description="Designed by Scarpa and built between 1953 and 1956, the Venezuelan pavilion is one of the first pavilion you can reach from the main entrance of the Giardini. It's the first Latin American country pavilion that was built."
                href={{
                  Maps: "https://maps.app.goo.gl/LX5QYn25FR2FcKzx9",
                }}
              />
              <Point
                title="Monument to the Partisan Woman"
                subtitle="Giardini"
                location={[12.3555043, 45.4294183]}
                description="Situated just outside of the Giardinni statue is designed by Augusto Murer and installation and showcase made by Carlo Scarpa in 1965"
                href={{
                  Maps: "https://maps.app.goo.gl/7eYpqWWLZ7smp2zZ8",
                  Photos:
                    "https://www.archiweb.cz/en/b/pamatnik-benatskym-partyzankam-monumento-alla-partigiana",
                }}
              />
              <ImageWithDescPoint
                title="Central Pavilion window"
                subtitle="Giardini"
                location={[12.3589906, 45.43008888]}
                description="Inside the Central Pavilion you can find a window designed by Carlo Scarpa. The window has been hidden for decades and has been re-discovered by curators Yvonne Farrell and Shelley McNamara in 2018."
                src={assetImages["header.jpg"]}
                alt="central-pavilion-window"
              />
              <ImageWithDescPoint
                title="Giardino delle Sculture"
                subtitle="Giardini"
                location={[12.3585906, 45.4300888]}
                description="Situaded inside the Central Pavilion of the Venice Biennale, the sculpture garden is made in 1952."
                src={assetImages["giardinni-sculture.jpg"]}
                href={{
                  Maps: "https://maps.app.goo.gl/EAPoR6AK6Jkh2fTJ8",
                  Website:
                    "https://www.labiennale.org/it/luoghi/giardini-della-biennale",
                }}
              />
            </CardContainer>
          </Column>
        </Section>
      </MapWithContextProvider>
      <MapWithContextProvider>
        <Title>CARLO SCARPA WORK IN THE REST OF ITALY AND THE WORLD</Title>
        <Section>
          <StickyColumn>
            <MapComponent
              style={mapStyle}
              center={MAP_CENTER}
              zoom={MAP_ZOOM - 7}
            />
          </StickyColumn>
          <Column>
            <Divider>Veneto</Divider>
            <CardContainer padding="0.8rem">
              <Point
                title="Camping Fusina"
                subtitle="Venezia - Belluno"
                location={[12.2578598, 45.4209312]}
                color="FireBrick"
                description=""
                tags={["houses"]}
                href={{
                  Maps: "https://maps.app.goo.gl/fr4EYyp6zKe6s3qE8",
                  Archive:
                    "https://www.venicedesignbiennial.org/the-platform/camping-fusina-carlo-scarpa-venice-mainland",
                  Photos:
                    "https://divisare.com/projects/335762-carlo-scarpa-stefano-ferrando_studio-vetroblu-carlo-scarpa-camping-fusina",
                }}
              />
              <Point
                title="Tomba Brion"
                subtitle="Treviso - Cimitero di San Vito"
                location={[11.9129711, 45.7511374]}
                color="Brown"
                description=""
                tags={["tomb"]}
                href={{
                  Maps: "https://maps.app.goo.gl/GzEd6n7jPgRwSB6w9",
                  Website: "http://www.memorialebrion.it/",
                }}
              />
              <Point
                title="Treviso - Museum Gypsotheca Antonio Canova"
                subtitle="Possagno"
                location={[11.8805472, 45.8545517]}
                color="Brown"
                description=""
                href={{
                  Maps: "https://maps.app.goo.gl/MUe5Jqy8KbZJeo93A",
                  Website: "https://www.museocanova.it/en/",
                }}
              />
              <Point
                title="Palazzina Borgo"
                subtitle="Vicenza - Vicenza"
                location={[11.5389403, 45.5476704]}
                color="DarkRed"
                description=""
                tags={["houses"]}
                href={{
                  Maps: "https://maps.app.goo.gl/PcAiQrN7gsTUJ4X97",
                  Photos:
                    "https://divisare.com/projects/492302-carlo-scarpa-matteo-triola-palazzina-borgo",
                }}
              />
              <Point
                title="Villa Ottolenghi"
                subtitle="Verona - Bardolino"
                location={[11.2910484, 46.4640172]}
                color="Maroon"
                description=""
                tags={["houses"]}
                href={{
                  Maps: "https://maps.app.goo.gl/5SWu2v8eRKmr8FZx7",
                  Photos:
                    "https://divisare.com/projects/337514-carlo-scarpa-ake-e-son-lindman-villa-ottolenghi",
                }}
              />
              <Point
                title="Banca Popolare di Verona"
                subtitle="Verona - Verona"
                location={[10.9959069, 45.4400529]}
                color="Maroon"
                description=""
                href="https://maps.app.goo.gl/RYXY48KP56mSSgTV6"
              />
              <Point
                title="Museo Castelvecchio"
                subtitle="Verona - Verona"
                location={[10.9878207, 45.4396231]}
                color="Maroon"
                description=""
                href={{
                  Maps: "https://maps.app.goo.gl/iNKuHfRE9du3jCQw9",
                  Website:
                    "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=42545",
                }}
              />
              <Point
                title="Chiesa di Nostra Signora del Cadore"
                subtitle="Belluno - Belluno"
                location={[12.2390196, 46.4288346]}
                color="Red"
                description="Located in the ex-eni village."
                href={{
                  Maps: "https://maps.app.goo.gl/BE1o6orpdaAydnTX6",
                  Wikipedia:
                    "https://it.wikipedia.org/wiki/Chiesa_di_Nostra_Signora_del_Cadore",
                }}
              />
            </CardContainer>
            <Divider>Friuli</Divider>
            <CardContainer padding="0.8rem">
              <Point
                title="Tomba Veritti"
                subtitle="Udine - Udine"
                location={[13.217345, 46.0609152]}
                color="MediumSlateBlue"
                description=""
                tags={["tomb"]}
                href="https://maps.app.goo.gl/84k6hQeNcwdX47f17"
              />
              <Point
                title="Tomba Zilio"
                subtitle="Udine - Udine"
                location={[13.2178298, 46.061765]}
                color="MediumSlateBlue"
                description=""
                tags={["tomb"]}
                href={{
                  Maps: "https://maps.app.goo.gl/C2FuZqR4ny8C7MsSA",
                  Photos:
                    "https://mediateca.palladiomuseum.org/scarpa/web/opere_scheda.php?valo=i_6_80",
                }}
              />
              <Point
                title="Museo Revoltella"
                subtitle="Trieste - Trieste"
                location={[13.7632347, 45.6470009]}
                color="DarkSlateBlue"
                description="Renovation of the museum interior in 1963"
                tags={["museum"]}
                href={{
                  Maps: "https://maps.app.goo.gl/8JNgqG1g8NPzsQQq7",
                  Website: "https://museorevoltella.it/",
                }}
              />
            </CardContainer>
            <Divider>Bologna</Divider>
            <CardContainer padding="0.8rem">
              <Point
                title="Gavina Showroom"
                subtitle="Via Altabella, 23/A, 40125 Bologna"
                location={[11.3454501, 44.4951295]}
                description=""
                tags={["showroom"]}
                href={{
                  Maps: "https://maps.app.goo.gl/itQPjjH4QKmBvULaA",
                  Photos:
                    "https://www.archweb.com/fr/gallerie/ex-negozio-gavina/",
                }}
              />
            </CardContainer>
            <Divider>Firenze</Divider>
            <CardContainer padding="0.8rem">
              <Point
                title="Chiesa di San Giovanni Battista"
                subtitle="Firenzuola"
                location={[11.224551, 44.070731]}
                description=""
                href={{
                  Maps: "https://maps.app.goo.gl/vkMeJeACiwHQpEaN7",
                  Wikipedia:
                    "https://it.wikipedia.org/wiki/Chiesa_di_San_Giovanni_Battista_(Firenzuola)",
                }}
              />
            </CardContainer>
            <Divider>Tyrol</Divider>
            <CardContainer padding="0.8rem">
              <Point
                title="Casa Tabarelli"
                subtitle="Bolzano"
                location={[11.2910484, 46.4640172]}
                description=""
                tags={["houses"]}
                href={{
                  Maps: "https://maps.app.goo.gl/C2FuZqR4ny8C7MsSA",
                  Website: "https://www.tabarelli.it/casa-tabarelli/",
                  Photos:
                    "https://divisare.com/projects/339474-carlo-scarpa-sergio-los-altrospazio-casa-tabarelli",
                }}
              />
            </CardContainer>
            <Divider>Swiss</Divider>
            <CardContainer padding="0.8rem">
              <Point
                title="Zentner House"
                subtitle="Aurorastrasse 56, 8032 Zürich, Swiss"
                location={[8.5676783, 47.3701328]}
                description="The only work of the architect made outside of Italy."
                tags={["houses"]}
                href={{
                  Maps: "https://maps.app.goo.gl/3zcKdDCwWJK1zPhb8",
                  Photos:
                    "https://architecture-history.org/architects/architects/SCARPA/OBJECTS/1964,%20the%20Zentner%20house,%20Zurich,%20Switzerland.html",
                }}
              />
            </CardContainer>
          </Column>
        </Section>
      </MapWithContextProvider>

      <Title>Other References</Title>

      <ul>
        <li>
          <InlineLink href="https://www.polano.eu/pdf/777%20scarpa.pdf">
            carlo scarpa progettista di alfabeti
          </InlineLink>
        </li>
      </ul>
    </>
  )
}
