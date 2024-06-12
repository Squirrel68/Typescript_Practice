# TypeScript

## 1. Kiểu dữ liệu

```
- kiểu any: cho phép lưu trữ bất kỳ giá trị nào
- kiểu enum: cho phép lưu trữ một tập hợp các giá trị cố định
- kiểu tuple: Hoạt động như một array, nhưng:
    +Số lượng phần tử cố định, và cần được khai báo trước
    + Mỗi phần tử có thể có kiểu dữ liệu khác nhau, và cần được khai báo trước
- Union: Cho phép một biến có thể chứa nhiều kiểu dữ liệu khác nhau
- alias: tạo ra một kiểu dữ liệu mới từ các kiểu dữ liệu có sẵn
- kiểu void: không trả về giá trị
```

## 3. OOP

### 3.1. Encapsulation (Tính đóng gói)

```
- private: chỉ có thể truy cập trong class
- protected: chỉ có thể truy cập trong class và các class con
- public: có thể truy cập từ bất kỳ đâu
```

### 3.2. Inheritance (Tính kế thừa)

```
- Class con kế thừa từ class cha các thuộc tính và phương thức của class cha qua từ khóa extends
- Typescript không hỗ trợ đa kế thừa, nên để đa kế thừa thì 1 class mình sẽ implements nhiều interface

```

### 3.3. Abstraction (Tính trừu tượng)

```
- Abstraction : Ẩn thông tin chi tiết, chỉ hiển thị thông tin cần thiết
- Interface :
    + Định nghĩa cấu trúc cho class
    + Trong typescript là cú pháp định nghĩa kiểu dữ liệu
- Abstract class :
    + Lớp trừu tượng: không thể khởi tạo đối tượng từ lớp trừu tượng, chỉ dùng để kế thừa
    + Abstract method: chỉ khai báo, không có phần thực thi
- Sự khác biệt giữa Interface và Abstract class:
    + Interface: chỉ định cấu trúc, không có phần thực thi
    + Abstract class: có thể có phần thực thi
```

### 3.4. Polymorphism (Tính đa hình)

```
- Đa hình:Cho phép nhiều phiên bản của một phương thức cùng tên dựa trên Overloading (Nạp chồng) và Overriding (Ghi đè)
    + Overloading (Nạp chồng): Cùng tên nhưng khác nhau về số lượng và kiểu dữ liệu của tham số đầu vào
    + Overriding (Ghi đè): Class con ghi đè phương thức của class cha, chỉ ghi đè phần thân của phương thức, các tham sô và kiểu dữ liệu không thay đổi

```

## 2. Static

```
Khi khai báo biến hoặc phương thức trong CLass ngoài từ khóa public, private, protected thì ta có thể sử dụng từ khóa static
- biến hoặc phương thức static sẽ đuợc gọi trực tiếp từ class mà không cần khởi tạo đối tượng
```

## 4. Generic

```

```

## 5. Type Casting

- typCasting (ép kiểu): là quá trình chuyển đổi giữa các kiểu dữ liệu trong TypeScript. Ép kiểu trong TypeScript có 2 loại:

```
1. Ép kiểu ngầm định (Implicit Type Casting): TypeScript tự động chuyển đổi ngầm định giữa các kiểu dữ liệu khi chúng không phù hợp với nhau.
```

```
2. Ép kiểu tường minh (Explicit Type Casting): TypeScript cho phép chúng ta chuyển đổi giữa các kiểu dữ liệu một cách rõ ràng.
2 cú pháp để chuyển đổi giữa các kiểu dữ liệu một cách rõ ràng.
    <kiểu-dữ-liệu>biến
    biến as kiểu-dữ-liệu
```

### 7. readonly

readonly thường được sử dụng cho các thuộc tính của class, interface
const thường được sử dụng cho các biến
