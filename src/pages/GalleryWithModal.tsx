import { SimpleGrid, Image, Modal } from '@mantine/core';
import { useState } from 'react';

const images = ["/x.jpg", "/y.jpg", "/z.jpg", "/a.jpg", "/b.jpg", "/c.jpg", "/x.jpg", "/y.jpg", "/z.jpg", "/a.jpg", "/b.jpg"];

export default function GalleryWithModal() {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} size="xl" centered>
        {active && <Image src={active} />}
      </Modal>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            h={180}
            fit="cover"
            radius="md"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setActive(src);
              setOpened(true);
            }}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
