var katzDeliLine = [];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are naumber " + katzDeliLine.length + "in line."
}

function nowServing(arr) {
  if (arr.length > 0) {
    var name = arr[0]
    arr.shift()
    return "Currently serving " + name + "."
  } else { return "There is nobody waiting to be served!"}
  
}