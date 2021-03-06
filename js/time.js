
  function update(id = '', start = {}) {
    const dom = document.querySelector(id);
    const ts = new Date(start.year, start.month - 1, start.day).getTime();

    return () => {
      let offset = parseInt((new Date().getTime() - ts) / 1000, 10)
      
      if(offset < 0) {
        dom.innerHTML = "0天0时0分0秒";
        return;
      }

      let day = Math.floor(offset / 86400),
        hour = Math.floor((offset % 86400) / 3600),
        minute = Math.floor(((offset % 86400) % 3600) / 60),
        second = Math.floor(((offset % 86400) % 3600) % 60);

      dom.innerHTML = day + "天" + hour + "时" + minute + "分" + second + "秒";
    };
  }

  const startTime = {
    year: 2019,
    month: 03,
    day: 12
  };


  isNaN(startTime.year) && (startTime.year = 2018);
  isNaN(startTime.month) && (startTime.month = 2);
  isNaN(startTime.day) && (startTime.day = 10);

  const timeUpdate = update('#site-time', startTime);
  timeUpdate();
  setInterval(timeUpdate, 1000);
