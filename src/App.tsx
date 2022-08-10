import { useState } from "react";
import { Display } from "./components/display";
import { Header } from "./components/header";
import { actions } from "./components/key";
import { Menu } from "./components/menu";
import { ScientificKeyboard } from "./components/scientificKeyboard";
import { StandardKeyboard } from "./components/standardKeyboard";

import { Calculator } from "./styles";
import { GlobalStyle } from "./styles/global";

export type AllowedKeys = "Standard" | "Scientific";

export function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeKeys, setActiveKeys] = useState<AllowedKeys>("Scientific");
  const [displayContent, setDisplayContent] = useState("0")
  const [countContent, setCountContent] = useState("")
  const [firstValue, setFirstValue] = useState("")
  const [secondValue, setSecondValue] = useState<string>()
  const [previousKey, setPreviousKey] = useState("")
  const [operatorKey, setOperatorKey] = useState("")

  function handleOpenMenu() {
    setMenuOpen(true)
  }

  function handleCloseMenu() {
    setMenuOpen(false)
  }
    
  function handleChangeActiveKeys(newActiveKeys : AllowedKeys) {
      setActiveKeys(newActiveKeys)
      setMenuOpen(false)
      setDisplayContent("0")
      setFirstValue("")
      setPreviousKey("")
      setCountContent("")
      setSecondValue("")
  }

  function handleNumber(number : string) {
    if (previousKey === "calculate") {
      setSecondValue("")
      setFirstValue("")
      setPreviousKey("")
      setDisplayContent(number)
    } else {
      if (displayContent === "0") {
        setDisplayContent(number)
      } else {
        if (previousKey === operatorKey) {
          setDisplayContent(number)
        } else {
          setDisplayContent((displayContent + number))
        }
      }
    }
  }
 
  function handleCountContent(action : string) {

    if (action === "add") {
      setCountContent(`${displayContent} + `)

    } else if (action === "subtract") {
      setCountContent(`${displayContent} - `)

    } else if (action === "multiply") {
      setCountContent(`${displayContent} × `)
      
    } else if (action === "divider") {
      setCountContent(`${displayContent} ÷ `)
      
    } else if (action === "x-power-y") {
      setCountContent(`${displayContent} ^ `)
      
    } else if (action === "log-y-x") {
      setCountContent(`${displayContent} log base `)
      
    } else if (action === "y-root-x") {
      setCountContent(`${displayContent} yroot `)
      
    } else if (action === "mod") {
      setCountContent(`${displayContent} Mod `)
      
    } else if (action === "exponential") {
      setCountContent(`${displayContent},e +`)
      
    }     
  }

  function factoralize(value : number) : number { 

    if (value < 0) {
      return -1;
    } else if (value === 0) {
      return 1;
    } else {
      return value * factoralize(value - 1)
    }
  }
    
  function calculate() {

    let result = 0

    if (operatorKey === "add") {
      result = Number(firstValue) + Number(secondValue ?? displayContent)
      
    } else if (operatorKey === "subtract") {
      result = Number(firstValue) - Number(secondValue ?? displayContent)

    } else if (operatorKey === "multiply") {
      result = Number(firstValue) * Number(secondValue ?? displayContent)

    } else if (operatorKey === "divider") {
      result = Number(firstValue) / Number(secondValue ?? displayContent) 

    } else if (operatorKey === "mod") {
      result = Number(firstValue) % Number(secondValue ?? displayContent) 

    } else if (operatorKey === "x-power-y") {
      result = (Math.pow((Number(firstValue)), (Number(secondValue ?? displayContent))))
    
    } else if (operatorKey === "y-root-x") {
      result = (Math.pow((Number(firstValue)), (1 / (Number(secondValue ?? displayContent)))))
    
    } else if (operatorKey === "log-y-x") {
      result = (Math.log(Number(firstValue))) / (Math.log(Number(secondValue ?? displayContent)))

    } else if (operatorKey === "exponential") {
      result = Number(firstValue) * Math.pow((10), Number(secondValue ?? displayContent))

    }

    setDisplayContent(result.toString())
    setFirstValue(result.toString())
  }

  function handlePressedKey(action : actions, number ?: string) {

    setPreviousKey(action)

    switch (action) {

      case "number":
        handleNumber(number as string)
      break;

      case "calculate":
        if (previousKey === "calculate") {
          calculate()
        } else {
          setSecondValue(displayContent)
          calculate()
          setCountContent(`${countContent} ${(secondValue ?? displayContent)} =`)
        }
      break;

      case "divider":
      case "multiply":
      case "subtract":
      case "add":
      case "mod":
      case "exponential":
      case "x-power-y":
      case "y-root-x":
      case "log-y-x":
        setSecondValue(undefined)
        handleCountContent(action)
        if (previousKey === "calculate") {
          setFirstValue(displayContent)
          setOperatorKey(action)
        } else {
          if (firstValue) {
            setOperatorKey(action)
            calculate()
          } else {
            setOperatorKey(action)
            setFirstValue(displayContent)
          }
        }
        
      break;
      
      case "backspace":
        if (displayContent === "0" || displayContent.length === 1) {
          setDisplayContent("0")
        } else {
          setDisplayContent(displayContent.substring(0, displayContent.length - 1))
        }
      break;
      
      case "clear":
        setDisplayContent("0")
      break;
      
      case "clear-all":
        setDisplayContent("0")
        setFirstValue("")
        setPreviousKey("")
        setCountContent("")
        setSecondValue("")
      break;
      
      case "percentage":
        setDisplayContent(((Number(firstValue) / 100) * Number(displayContent)).toString())
      break;
      
      case "decimal":
        if (!displayContent.includes(".")) {
          setDisplayContent(displayContent + ".")
        } if (previousKey === "calculate") {
          setDisplayContent("0.")
        } 
      break;
            
      case "one-over-x":
        setOperatorKey(action)
        setDisplayContent((1 / Number(displayContent) ).toString())
        setCountContent(`1/(${displayContent})`)

      break;
      
      case "x-power-two":
        setOperatorKey(action)
        setDisplayContent(Math.pow((Number(displayContent)), 2).toString())
        setCountContent(`sqr(${displayContent})`)
      break;
      
      case "square-root":
        setOperatorKey(action)
        setDisplayContent(Math.sqrt(Number(displayContent)).toString())
        setCountContent(`√(${displayContent})`)
      break;
      
      case "negate":
        setOperatorKey(action)
        setDisplayContent((Number(displayContent) * -1).toString())
      break;

      case "pi":
        setDisplayContent((Math.PI).toString())
      break;
      
      case "euler":
        setDisplayContent((Math.E).toString())
      break;
      
      case "module":
        setDisplayContent(Math.abs((Number(displayContent))).toString())
        setCountContent(`abs(${displayContent})`)
      break;

      case "x-power-three":
        setOperatorKey(action)
        setDisplayContent(Math.pow((Number(displayContent)), 3).toString()) 
        setCountContent(`cube(${displayContent})`)         
      break;
            
      case "cubic-root":
        setOperatorKey(action)
        setDisplayContent(Math.cbrt(Number(displayContent)).toString()) 
        setCountContent(`cuberoot(${displayContent})`)       
      break;
                   
      case "factorial":
        setDisplayContent(factoralize(Number(displayContent)).toString())
        setCountContent(`fact(${displayContent})`)
      break;
                        
      case "two-power-x":
        setOperatorKey(action)
        setDisplayContent(Math.pow(2, (Number(displayContent))).toString())
        setCountContent(`2^(${displayContent})`)
      break;
      
      case "right-parentheses":
        
      break;
                        
      case "ten-power-x":
        setDisplayContent(Math.pow(10, (Number(displayContent))).toString())
        setCountContent(`10^(${displayContent})`)
      break;
                        
      case "e-power-x":
        setDisplayContent(Math.exp(Number(displayContent)).toString())
        setCountContent(`e^(${displayContent})`)
      break;

      case "log":
        setDisplayContent(Math.log10(Number(displayContent)).toString()) 
        setCountContent(`log(${displayContent})`)
      break;

      case "natural-logarithm":
        setDisplayContent(Math.log(Number(displayContent)).toString())
        setCountContent(`ln(${displayContent})`)
      break;
    }
  }

  return (
    <div className="App">
      <Calculator>
        <Header onOpenMenu={handleOpenMenu} activeKeys={activeKeys} />
        {
          menuOpen && <Menu
          onCloseMenu={handleCloseMenu} onChange={handleChangeActiveKeys}/>
        }
        <Display displayContent={displayContent} countContent={countContent} />
        {
          activeKeys === "Standard" && <StandardKeyboard handlePressedKey={handlePressedKey} />
        }
        {
          activeKeys === "Scientific" && <ScientificKeyboard handlePressedKey={handlePressedKey} />
        }
      </Calculator> 
      <GlobalStyle/>     
    </div>
  );
}