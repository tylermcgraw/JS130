const names = [
  "Nqn Ybirynpr",
  "Tenpr Ubccre",
  "Nqryr Tbyqfgvar",
  "Nyna Ghevat",
  "Puneyrf Onoontr",
  "Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv",
  "Wbua Ngnanfbss",
  "Ybvf Unvog",
  "Pynhqr Funaaba",
  "Fgrir Wbof",
  "Ovyy Tngrf",
  "Gvz Orearef-Yrr",
  "Fgrir Jbmavnx",
  "Xbaenq Mhfr",
  "Fve Nagbal Ubner",
  "Zneiva Zvafxl",
  "Lhxvuveb Zngfhzbgb",
  "Unllvz Fybavzfxv",
  "Tregehqr Oynapu"
];
const aCode = "a".charCodeAt(0);
const zCode = "z".charCodeAt(0);
const mid = (aCode + zCode) / 2;
const ACode = "A".charCodeAt(0);
const ZCode = "Z".charCodeAt(0);
const MID = (ACode + ZCode) / 2;

function unenecryptRot13Names(names) {
  names.forEach(name => {
    console.log(
      name.split('').map(char => {
        if (isAlpha(char)) {
          let code = char.charCodeAt(0);
          if (isUpper(char)) {
            return String.fromCharCode(code + (code > MID ? -13 : 13));
          } else {
            return String.fromCharCode(code + (code > mid ? -13 : 13));
          }
        }
        return char;
      }).join('')
    );
  });
}

function isAlpha(char) {
  let charCode = char.toLowerCase().charCodeAt(0);
  if (charCode >= aCode && charCode <= zCode) return true;
  return false;
}

function isUpper(char) {
  if (char === char.toUpperCase()) return true;
  return false;
}

unenecryptRot13Names(names);