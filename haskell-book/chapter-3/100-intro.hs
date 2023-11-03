module Print1 where

main :: IO () -- you type main in CLI to call it

main = putStrLn "hello world!"

-- main = do, runs chain of strings
-- eg.
-- main = do
-- putStrLn "str" -- line
-- putStr "str" -- across

-- ++ concatenates

myGreeting :: String
myGreeting = "hello " ++ "world"

-- runFcn = putStrln myGreeting
-- doesn't work