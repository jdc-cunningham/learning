#include <string>
#include <iostream>

std::string getName()
{
  std::string name{};
  std::cout << "Enter your name \n";
  std::getline(std::cin, name);
  return name;
}

int getAge()
{
  int age{};
  std::cout << "Enter your age \n";
  std::cin >> age;
  return age;
}

// doesn't work for decimal
// int main()
// {
//   double nameAgeYears{};
//   std::string name = getName();
//   int age = getAge();
//   nameAgeYears = static_cast<int>(age) / static_cast<int>(name.length());
//   std::cout << "You've lived " << nameAgeYears << " years for each letter in your name.";
// }

int main()
{
  double nameAgeYears{};
  std::string name = getName();
  int age = getAge();
  double nameLetters{static_cast<double>(name.length())}; // this was the mistake dang it
  nameAgeYears = age / nameLetters;
  std::cout << "You've lived " << nameAgeYears << " years for each letter in your name.";
}

// not getting the float output of 5.75