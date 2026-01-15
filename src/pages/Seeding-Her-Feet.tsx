import { SimpleGrid, Stack, Box, Text, Title } from "@mantine/core";
import GalleryWithModal from "./GalleryWithModal";

export default function SeedingHerFeet() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" verticalSpacing="xl">
        <div>
          <Box>
            <Title order={4} fw={400}>
              Seeding Her Feet
            </Title>
          </Box>
        </div>
        <div>
          {" "}
          <Box>
            <Text size="sm  " fs="italic">
              A spatial plan for artworks ‘Seeding my feets in the chant of
              bells’ by Mehraneh Atashi.
            </Text>
          </Box>
        </div>
        <div>
          {" "}
          <Box>
            <Text size="sm">
              Year ｜ 2021
              <br />
              Type ｜ exhibition concept development & fabrication plan
              <br />
              Exhibition date ｜ 11.09.2021 – 05.12.2021
              <br />
              Location ｜ TENT Rotterdam, Netherlands
            </Text>

            <Text size="sm" mt={24}>
              Concept & installations ｜ Mehraneh Atashi
              <br />
              Spatial design development & fabrication plan ｜ Szu-Yi Wang
              <br />
              Production team ｜ TENT Rotterdam
            </Text>
          </Box>
        </div>
        <div>
          <Box>
            <Text size="sm" lh={1.8} fs="italic">
              “There's resonating vibe among the pieces. All subtle movements
              and narrative vibrations (either conceptually or specifically)
              inhabit the gallerie room—the room for the healing vibe and all
              healed minds. Lovely to see people taking their time to immerse
              themselves in…” (Notes from Szu)
            </Text>
          </Box>
        </div>
        <div>
          {" "}
          <Box>
            <Stack gap={32}>
              <Text size="sm" lh={1.8}>
                The project is a spatial development for artist Mehraneh Atashi.
                The design is developed along the philosophy of Mehraneh’s works
                ‘Seeding my feets in the chant of bells’ (2021)—presented in the
                exhibition ‘Who Wants to Live in a World Without Magic?’ curated
                by Katayoun Arian at TENT Rotterdam.
              </Text>

              <Text size="sm" lh={1.8} c="dimmed" fs="italic">
                The collaboration is a journey of thinking along with her
                thoughts and developing the corresponding spatial gestures and
                narrative practice. And the realization is the process of
                knowing and learning from your artworks and spirit.
              </Text>

              <Text size="xs" c="dimmed">
                Credit: Photo 1, 3–5 by Szu-Yi Wang / Photo 2, 6–11 by Aad
                Hoogendoorn
              </Text>
            </Stack>
          </Box>
        </div>
        <div>
          <Box>
            <Stack gap={32}>
              <Text size="sm" lh={1.8} c="dimmed" fs="italic">
                There’re light, shadows, spatial elements and subtle rituals as
                the languages we shared. The realization is the process of
                knowing and learning from your artworks and spirit.
              </Text>

              <Text size="sm" lh={1.8} c="dimmed" fs="italic">
                After the title, perhaps there’s no need for further words to
                describe Mehr’s works, her concepts and her personality involved
                in the projects. My mind is like one of the seeds growing in the
                hexagon filled with soil; languages are sunken in the meandering
                micro paces, re-rooted, and gradually connected amid the chant
                of the bells.
              </Text>

              <Text size="sm" c="dimmed" fs="italic">
                _Notes from the designer
              </Text>
            </Stack>
          </Box>
        </div>
      </SimpleGrid>
      <GalleryWithModal />
    </>
  );
}
