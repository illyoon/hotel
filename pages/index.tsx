import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navigation from "../components/organs/Navigation";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

export default function Home() {
  return (
    <>
      <Button>Button</Button>
      <Button secondary>Button</Button>

      <Input />
      <Navigation />
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
