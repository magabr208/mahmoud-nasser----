const secondry1_btn = document.getElementById('secondry1');
const secondry1_schedules = document.getElementById('first_secondry')
secondry1_btn.addEventListener('click', function() {
  secondry1_schedules.classList.toggle('display')
});

const secondry2_btn = document.getElementById('secondry2');
const secondry2_schedules = document.getElementById('second_secondry')
secondry2_btn.addEventListener('click', function() {
  secondry2_schedules.classList.toggle('display')
});

const secondry3_btn = document.getElementById('secondry3');
const secondry3_schedules = document.getElementById('third_secondry')
secondry3_btn.addEventListener('click', function() {
  secondry3_schedules.classList.toggle('display')
});

// رسالة الموقع : قريبا



function showMessage() {
  alert("🙂يبني انا مش قولتلك مش دلوقتي رايح فين بس");  // الرسالة التي ستظهر للمستخدم
}









//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> nav bar 
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}









//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> list drop down >>>>>>> Menu


function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// إغلاق القائمة إذا ضغطت خارجها
window.onclick = function(event) {
  if (!event.target.matches('.effect')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
}






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> scrol to top


const scrollBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   list drop down ننزل ل تحت خالص




function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>     show - hide photo 





function toggleImages(groupId, buttonId) {
    const group = document.getElementById(groupId);
    const button = document.getElementById(buttonId);
  
    if (group.style.display === "none") {
      group.style.display = "block";
      button.textContent = "شيله خلاص ";
      button.classList.add("hidden-mode"); // أضف اللون الأحمر
    } else {
      group.style.display = "none";
      button.textContent = "وريني الجدول";
      button.classList.remove("hidden-mode"); // رجع اللون الأزرق
    }
  }
  

  