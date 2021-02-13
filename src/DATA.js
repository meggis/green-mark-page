const DATA = {
  projects: {
    1: {
      title: "Project of garden in Radwanice",
      localization: "Radwanice, Poland",
      descript: "Zadaniem projektanta było zagospodarowanie przydomowego terenu zielonego, o charakterze naturalnym, funkcjonalnego zarówno w kontekście dorosłych jak i dzieci. Motyw przewodni to różnobarwność oraz przede wszystkim sezonowość kwitnienia. Proponowana zieleń obfituje zarówno w roślinność wysokopienną jak i niskopienną.",
      bgImage: "p1w1.jpg",
      photos: [
      "p1w1.jpg", "p2w1.jpg"
      ]
    },
    2: {
      title: "Project of garden in Mysłakowice",
      localization: "Mysłakowice, Poland",
      descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      bgImage: "p2w1.jpg",
      photos: [
      "p2w1.jpg"
      ]
    },
    3: {
      title: "Project of garden in Strzeszów",
      localization: "Strzeszów, Poland",
      descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      bgImage: "p3w1.jpg",
      photos: [
      "p3w1.jpg"
      ]
    },
  }
}


export const getSpecificItem = (id) => {
  return DATA.projects[id]
}

// To jest to samo
// export const getSpecificItem = (id) => DATA.projects[id]


export default DATA;