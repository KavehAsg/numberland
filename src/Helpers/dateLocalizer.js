export const makeDateLocalized = (publishDate) => {
    const splittedDate = publishDate.split("-"); // make it separate to match the Date input
    const newDate = new Date(
      Date.UTC(+splittedDate[0], +splittedDate[1], +splittedDate[2]) // year , month , day
    );

    const localizedDate = newDate.toLocaleDateString("fa-IR", {
      day: "numeric",
      year: "numeric",
      month: "long",
    }); // invert the Date to persian

    const splittedLocalDate = localizedDate.split(" "); // order the date to match persian format => year,month,day to display
    return splittedLocalDate.join().replaceAll(",", " "); // remove the ,
  };