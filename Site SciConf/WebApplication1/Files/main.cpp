//������������ ������ �1.2 (������� 11)
#include <iostream>
#include <cstdlib>
#include <locale.h>

using namespace std;
// 1. ������ ������� ��� ���������� ������� ������� ��������
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
// 1. ��������� ��� ������� ��� ��������� ��������� � ���������
int *massive1 = new int[10];
int *massive2 = new int[10];

// 2. ������������� ��� �������, ������ ������ ������� � ����������
cout << "������� ��������� ������� � ������ ��������:" << endl;

for (int i = 0; i < 10; i++){
    cout << "������� ��������� " << i+1 << "-�� ������: ";
    cin >> massive1[i];
}

cout << "������� ��������� ������� �� ������ ��������:" << endl;

for (int i = 0; i < 10; i++){
    cout << "������� ��������� " << i+1 << "-�� ������: ";
    cin >> massive2[i];
}
/* 3. ���������� ������� ���������� ��� ������� �� ��������, ����� ����������
 4-�� �� ����� ������� ��������� (��� ��� ��������� � �������� �������
 �� 7-�� ������� � ����� (��� ��� ��������� ��� � ����,�� i = 6))*/
sort_bubble(massive1);
sort_bubble(massive2);

for (int i; i < 10; i++) {
    cout << massive1[i];
}
for (int i; i < 10; i++) {
    cout << massive2[i];
}

if (massive1[6] > massive2[6]) {
    cout << "�������� �� ����� ������� ��������� ������ � ������ ��������";
}
if (massive1[6] < massive2[6]){
        cout << "�������� �� ����� ������� ��������� ������ �� ������ ��������";
    }
if (massive1[6] == massive2[6]){
        cout << "�������� ����� ���������";
}

delete []massive1;
delete []massive2;

return 0;
}
