import {
  Container,
  Stack,
  Grid,
  Box,
  Text,
  Title,
} from "@mantine/core";

export default function WritingBodyMovingStrokes() {
  return (
    <Container size="xl" py={80}>
      <Stack gap={80}>
        {/* ROW 1 */}
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box>
              <Title order={4} fw={400}>
                Writing Body, Moving Strokes 書寫身體，風動筆畫
              </Title>

              <Text size="sm" mt={20}>
                Year ｜ 2023 – ongoing
              </Text>
              <Text size="sm">
                Type ｜ research, body language, performance
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box>
              <Title order={4} fw={400} ta="right">
                Beginning with Chi: An Exploration of Hanzi’s Spatiality and
                Embodiment
              </Title>

              <Text size="sm" ta="right" mt={20}>
                由氣出發——探索漢字的空間性與身體性
              </Text>
            </Box>
          </Grid.Col>
        </Grid>

        {/* ROW 2 */}
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box>
              <Text size="sm" c="dimmed" lh={1.8}>
                本研究計畫由台灣國藝會贊助
                <br />
                荷蘭 iii Den Haag, PANT 台荷藝術 協力
              </Text>

              <Text size="sm" lh={1.8} mt={24}>
                在研究成果之交流展演中，王思懿與音樂家、舞者及口說表演者等不同領域之（表演）藝術家進行即興互動與交流，透過人與人（身體）、人與非人（語言／氣候自然）的共演實驗，交換對漢字之身體性、空間性與環境感知的理解。
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box>
              <Text size="sm" ta="right" c="dimmed">
                Raw Dates Session, iii Den Haag
              </Text>

              <Stack gap={6} mt={24}>
                <Text size="sm">Simone Sacchi（電子音樂，義大利）</Text>
                <Text size="sm">Marianne（身體行動，荷蘭）</Text>
                <Text size="sm">Benjamin Janzen（表演與裝置藝術，德國）</Text>
                <Text size="sm">Mar Fu Qi（視覺藝術、攝影、身體行動，中國）</Text>
                <Text size="sm">Alessia Lombardi（舞蹈，義大利）</Text>
                <Text size="sm">Valerio Conti（鋼琴、聲樂，義大利）</Text>
                <Text size="sm">以及其他來自各種領域之創作者。</Text>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>

        {/* ROW 3 */}
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box>
              <Text size="sm" lh={1.8} c="dimmed">
                《書寫身體，風動筆畫》為主持藝術家王思懿長期創作研究「字築 Zi Zhu: Hanzi Building Practice」之延伸實驗，以漢字作為空間與感知的媒介，聚焦漢字文化中潛藏的空間性與身體性，進一步探索身體、空間與氣候感知之間的交互關係。
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box>
              <Text size="sm" lh={1.8} c="dimmed">
                計畫由「風、雲、雨、氣」等氣候漢字之研究出發，回溯其造字邏輯與天象觀察，並嘗試將文字所指涉的「氣」轉化為身體運動中的「氣」，發展一套以身體演繹文字、以空間承載感知的創作方法。作為多元藝術共演計畫，本計畫透過「空間—身體—空間書寫」三個研究面向，進行文本研究、漢字結構之視覺分析、錄像探索與即興交流，測試漢字空間性轉化為身體語言展演形式的可能性。
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
