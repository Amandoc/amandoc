$(function () {
    let flag1 = true;
    $(".isContent").on({
      blur: function () {
        let content = $("#content").val();
        if (content.length === 0 || content === null) {
          $("#noContent").css({ color: "red" }).text("내용을 작성해 주세요.");
          flag1 = false;
        }
      },
      focus: function () {
        $("#noContent").text("");
        flag1 = true;
      },
    });
    $("#canSubmit").click(function (e) {
      if (!(flag1)) {
        alert("메시지를 확인해주세요.");
        e.preventDefault();
      }
    });
  });
  