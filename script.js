function activeButtonInput({ currentTarget }) {
  const group = currentTarget?.closest(".button-inputs");
  const input = group?.querySelector('input[type="hidden"]');

  if (input) {
    input.value = this.innerText;

    $(group)
      .find("button")
      .each(function () {
        $(this).attr(
          "class",
          $(this)
            .attr("class")
            .replace(/btn-primary/g, "btn-outline-dark")
        );
      });

    $(currentTarget).attr(
      "class",
      $(currentTarget)
        .attr("class")
        .replace(/btn-outline-dark/g, "btn-primary")
    );
  }
}

$(document).ready(function () {
  $(".button-inputs button").each(function () {
    $(this).on("click", activeButtonInput);
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    $(this).removeClass("needs-validation");
    $(this).addClass("was-validated");
  });
});
