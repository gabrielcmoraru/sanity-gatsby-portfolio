import experimentIcon from "react-icons/lib/md/extension";

export default {
  name: "experienceSubItem",
  type: "document",
  title: "Experience Inner Boxes",
  icon: experimentIcon,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "description",
      title: "description",
      type: "bioPortableText"
    },
    {
      name: "logo",
      title: "Logo",
      type: "figure"
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "logo"
    }
  }
};
