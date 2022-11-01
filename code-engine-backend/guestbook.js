/**
 * Web application
 */
const apiUrl =
  "https://ppi-backend.uc693bw5hl7.us-east.codeengine.appdomain.cloud";

// for local testing
//const apiUrl = 'http://localhost:8080';
const guestbook = {
  // retrieve the existing guestbook entries
  get() {
    return $.ajax({
      type: "GET",
      url: `${apiUrl}/guestbook/entries`,
      dataType: "json",
    });
  },
};

(function () {
  let entriesTemplate;
  let animalsTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($("#entries-template").html());
    animalsTemplate = Handlebars.compile($("#animals-template").html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    console.log("Loading entries...");
    $("#entries").html("Loading entries...");
    guestbook
      .get()
      .done(function (result) {
        console.log(result);
        if (!result.entries) {
          return;
        }
        var history = result.entries.filter(function (entry) {
          return !entry.name.includes("_RECORDS_");
        });

        var animal = result.entries.filter(function (entry) {
          return entry.name.includes("_RECORDS_");
        });

        var record_arr = animal[0].name.split("|");
        var total = JSON.parse(JSON.stringify(animal));
        total[0].name = record_arr[1];
        var plastic = JSON.parse(JSON.stringify(animal));
        plastic[0].name = record_arr[2];
        var polythene = JSON.parse(JSON.stringify(animal));
        polythene[0].name = record_arr[3];
        var tin = JSON.parse(JSON.stringify(animal));
        tin[0].name = record_arr[4];
        var other = JSON.parse(JSON.stringify(animal));
        other[0].name = record_arr[5];

        history.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
        const context = {
          entries: history,
        };
        const record = {
          entries: total,
        };
        const record2 = {
          entries: plastic,
        };
        const record3 = {
          entries: polythene,
        };
        const record4 = {
          entries: tin,
        };
        const record5 = {
          entries: other,
        };
        $("#entries").html(entriesTemplate(context));
        $("#animals").html(entriesTemplate(record));
        $("#plastic").html(entriesTemplate(record2));
        $("#polythene").html(entriesTemplate(record3));
        $("#tin").html(entriesTemplate(record4));
        $("#other").html(entriesTemplate(record5));
      })
      .error(function (error) {
        $("#entries").html("No entries");
        console.log(error);
      });
  }

  $(document).ready(function () {
    prepareTemplates();
    loadEntries();
  });
})();
