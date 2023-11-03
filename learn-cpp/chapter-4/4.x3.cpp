#include <string>
#include <iostream>

int main()
{
  double valOne{};
  double valTwo{};
  std::string symbol{};
  double answer{};
  std::cout << "Enter a double value \n";
  std::cin >> valOne;
  std::cout << "Enter a double value \n";
  std::cin >> valTwo;
  std::cout << "Enter one of the following: +, -, *, or / \n";
  std::cin.ignore();
  std::getline(std::cin, symbol);

  if (symbol != "+" && symbol != "*" && symbol != "-" && symbol != "/")
  {
    return 0;
  }

  if (symbol == "+")
  {
    answer = valOne + valTwo;
  }

  if (symbol == "-")
  {
    answer = valOne - valTwo;
  }

  if (symbol == "*")
  {
    answer = valOne * valTwo;
  }

  if (symbol == "/")
  {
    answer = valOne / valTwo;
  }

  std::cout << valOne << " " << symbol << " " << valTwo << " is " << answer;
  return 0;
}

// differences in solution
// separate functions
// char
// directly executed if statements
// functionalized call with param in for dynamic

// #include <iostream>
 
// double getDouble()
// {
//     std::cout << "Enter a double value: ";
//     double x{};
//     std::cin >> x;
//     return x;
// }
 
// char getOperator()
// {
//     std::cout << "Enter one of the following: +, -, *, or / ";
//     char operation{};
//     std::cin >> operation;
//     return operation;
// }
 
// void printResult(double x, char operation, double y)
// {
//     if (operation == '+')
//         std::cout << x << " + " << y << " is " << x + y << '\n';
//     else if (operation == '-')
//         std::cout << x << " - " << y << " is " << x - y << '\n';
//     else if (operation == '*')
//         std::cout << x << " * " << y << " is " << x * y << '\n';
//     else if (operation == '/')
//         std::cout << x << " / " << y << " is " << x / y << '\n';
// }
 
// int main()
// {
//     double x { getDouble() };
//     double y { getDouble() };
 
//     char operation { getOperator() };
 
//     printResult(x, operation, y);
 
//     return 0;
// }