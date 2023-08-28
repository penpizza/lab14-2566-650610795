"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Text,  Textarea, Title } from "@mantine/core";
import { useState } from "react";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">Your rating</Title>
      <Rating value={value} onChange={setValue} size="lg" />
      <Textarea label="Your review" placeholder="Do you enjoy eating?" mt="xs" minRows={3}></Textarea>
      <Button color="orange" mt="xs">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text c="dimmed" align="center">Best pizza in this world. I give you X score.</Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly />
      </Group>
      <Text c="dimmed" align="center">My favourite part is pepperoni</Text>
      <Pagination total={20} color="orange" mt="md" position="center"/>
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Penpicha Thongkham 650610795
      </Text>
    </Container>
  );
}
