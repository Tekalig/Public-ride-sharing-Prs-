import {
  Card,
  Heading,
  CardBody,
  Stack,
  Divider,
  Text,
  AspectRatio,
  HStack,
} from "@chakra-ui/react";

const testimonials = [
  {
    id: 1,
    title: "Yohannes Sofia",
    description:
      "The transport was very comfortable. I am very happy. I got back to work on time, and it was very helpful.",
    image: "https://www.youtube.com/embed/mW5qMibFN80",
    price: "450 Birr",
  },
  {
    id: 2,
    title: "Markos Sofia",
    description:
      "This table is perfect for modern, minimalist spaces. It's made of solid oak and features a sleek, clean design.",
    image: "https://via.placeholder.com/560x315",
    price: "650 Birr",
  },
];

function Testimonial() {
  return (
    <div className="testimonialContainer">
      <HStack spacing="24px">
        <Card maxW="sm">
          <CardBody>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="testimonial-video-1"
                src={testimonials[0].image}
                allowFullScreen
              />
            </AspectRatio>
            <Stack mt="6" spacing="3">
              <Heading size="md">{testimonials[0].title}</Heading>
              <Text>{testimonials[0].description}</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>

        <Card maxW="sm">
          <CardBody>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="testimonial-video-2"
                src={testimonials[1].image}
                allowFullScreen
              />
            </AspectRatio>
            <Stack mt="6" spacing="3">
              <Heading size="md">{testimonials[1].title}</Heading>
              <Text>{testimonials[1].description}</Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </HStack>
    </div>
  );
}

export default Testimonial;
