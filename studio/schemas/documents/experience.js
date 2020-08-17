import experimentIcon from "react-icons/lib/md/extension";

export default {
  name: "experienceMain",
  type: "document",
  title: "Experience Main Boxes",
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
      name: "subItems",
      title: "Sub items",
      type: "array",
      of: [{ type: "reference", to: { type: "experienceSubItem" } }]
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "category"
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "logo"
    }
  }
};
