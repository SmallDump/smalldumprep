//Лабораторная работа №1.2 (Вариант 11)
#include <iostream>
#include <cstdlib>
#include <locale.h>

using namespace std;
// 1. Создаём функцию для сортировки массива методом пузырька
void sort_bubble (int* m) {
    for (int i = 9; i >= 1; i--) {
        for (int j = 0; j < i; j++) {
        int t = m[j];
        m[j] = m[j+1];
        m[j+1] = t;
        }
    }
}
int main()
{
setlocale(LC_ALL, "Russian");
// 1. Объявляем два массива для стоимости продуктов в магазинах
int *massive1 = new int[10];
int *massive2 = new int[10];

// 2. Иницилизируем оба массива, вводим каждый элемент с клавиатуры
cout << "Введите стоимость товаров в первом магазине:" << endl;

for (int i = 0; i < 10; i++){
    cout << "Введите стоимость " << i+1 << "-го товара: ";
    cin >> massive1[i];
}

cout << "Введите стоимость товаров во втором магазине:" << endl;

for (int i = 0; i < 10; i++){
    cout << "Введите стоимость " << i+1 << "-го товара: ";
    cin >> massive2[i];
}
/* 3. Используем функцию сортировки для каждого из массивов, затем сравниваем
 4-ый из самых дорогих продуктов (так как сортируем в обратную сторону
 то 7-ой элемент с конца (так как нумерация идёт с нуля,то i = 6))*/
sort_bubble(massive1);
sort_bubble(massive2);

for (int i; i < 10; i++) {
    cout << massive1[i];
}
for (int i; i < 10; i++) {
    cout << massive2[i];
}

if (massive1[6] > massive2[6]) {
    cout << "Четвёртый из самых дорогих продуктов дороже в первом магазине";
}
if (massive1[6] < massive2[6]){
        cout << "Четвёртый из самых дорогих продуктов дороже во втором магазине";
    }
if (massive1[6] == massive2[6]){
        cout << "Продукты стоят одинаково";
}

delete []massive1;
delete []massive2;

return 0;
}
