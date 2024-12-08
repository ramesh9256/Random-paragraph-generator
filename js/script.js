
const randomParagraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, velit a interdum sodales, erat nulla vehicula purus, eget bibendum tortor nulla vel lorem.",
    "Aliquam erat volutpat. Curabitur non tortor convallis, viverra nunc et, sodales elit. Morbi in turpis nec metus dictum tempus. Fusce euismod venenatis turpis, a vestibulum urna.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed volutpat nisl a bibendum lobortis. Ut consequat felis ut metus facilisis, nec consequat odio vehicula.",
    "Donec sed arcu leo. Ut nec orci felis. Vivamus et dui gravida, lacinia felis non, iaculis ante. Maecenas efficitur, libero eu pretium placerat, metus ante tincidunt enim, eu vehicula libero nulla id urna.",
    "Cras scelerisque urna neque, at vulputate purus pretium non. Integer scelerisque justo ac odio tincidunt, a sollicitudin lorem bibendum. Phasellus placerat malesuada ex at egestas.",
    "Sed id tincidunt sem. Integer aliquet, odio ac pretium vehicula, risus orci euismod felis, at tempor ipsum nisi vitae ante. Mauris in orci lacinia, ullamcorper nulla ut, fringilla purus.",
    "Nullam gravida metus ut dolor fringilla, eget pharetra purus auctor. Morbi eget tincidunt lorem. Sed ultricies vitae lorem sed dictum. Aliquam erat volutpat. Cras malesuada hendrerit metus.",
    "Proin tempor erat sit amet nunc aliquam, sit amet gravida odio auctor. Integer pharetra massa sapien, ac pretium velit scelerisque in. Etiam ut mauris fringilla, venenatis turpis et, lacinia nisl.",
    "Aliquam malesuada libero sed interdum fermentum. Ut euismod risus et metus porttitor, vitae feugiat enim viverra. Suspendisse potenti. Sed mollis, risus id feugiat venenatis, magna eros laoreet ex, ac tincidunt lorem arcu ut magna.",
    "Nam auctor nulla sed neque fermentum, vel hendrerit metus aliquet. Etiam sit amet sapien non purus dignissim vulputate. Integer tristique nisi at nisi aliquam tincidunt.",
    "Sed sollicitudin metus vel sem aliquam condimentum. Morbi consequat tempor lorem ac fermentum. Nullam euismod felis nec mi aliquet, nec dapibus justo faucibus.",
    "Curabitur sit amet maximus libero, ac maximus leo. Integer mollis felis felis, id ultricies dui viverra et. Fusce consequat lorem a ex condimentum malesuada.",
    "Ut bibendum magna sed ante interdum, vitae volutpat velit condimentum. Nunc suscipit orci non odio dapibus convallis. Vestibulum at erat quis odio auctor posuere. Etiam scelerisque, lectus a congue placerat, metus ligula volutpat velit, at condimentum lectus eros a est.",
    "Cras molestie, mauris ac placerat volutpat, purus libero condimentum sapien, ac dapibus justo urna non purus. Aenean sagittis orci sit amet felis aliquet fermentum.",
    "Phasellus euismod, arcu id fermentum malesuada, neque lorem efficitur ante, nec gravida felis lorem vel est. Vivamus sed laoreet arcu. Nulla gravida malesuada eros at tempor.",
    "Proin id purus sit amet ante vehicula dignissim. Nulla feugiat turpis a dui lacinia, vel gravida felis interdum. Aenean consectetur sapien a urna tincidunt, nec tempus urna efficitur.",
    "Morbi sollicitudin massa vitae purus facilisis, nec vestibulum nulla faucibus. Vestibulum in gravida metus, at condimentum purus. Fusce tincidunt lorem et viverra feugiat.",
    "Duis sollicitudin lacus a enim auctor, vel tristique eros hendrerit. Curabitur hendrerit nisl eget libero dictum, vel volutpat mauris posuere. Integer ut mauris in nulla laoreet aliquet.",
    "Nulla viverra sit amet est vitae sodales. Integer convallis maximus nisi in faucibus. Donec fringilla mauris at quam cursus eleifend. Morbi ut vestibulum felis, eu ultricies ligula."
];




let button = document.querySelector("button")
let container = document.querySelector(".container")

button.addEventListener("click", () => {
    let input = document.querySelector("input").value

    console.log(input)
    if (input < 0 || input > 20) {
        container.innerHTML = "";
        let h1 = document.createElement("h1");
        h1.classList.add("red")
        h1.textContent = "Invalid Number of Paragraph"
        container.append(h1)
    }
    else {
        container.innerHTML = "";
        for (let i = 0; i < input; i++) {
            let p = document.createElement("p");

            let randomNumber = Math.round(Math.random() * 20);
            console.log(randomNumber)

            p.textContent = randomParagraphs[randomNumber]
            container.append(p)
        }
    }
})
