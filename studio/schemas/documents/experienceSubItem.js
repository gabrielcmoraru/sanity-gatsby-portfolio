import experimentIcon from "react-icons/lib/md/extension";

export default {
  name: "experienceSubItem",
  type: "document",
  title: "Experience Inner Boxess",
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
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes this item.",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "logo"
    }
  }
};
