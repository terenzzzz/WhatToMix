# WhatToMix

本应用是一款专为鸡尾酒爱好者设计的在线查询和推荐工具。用户可以通过输入已有的材料、偏好或特定条件，快速获取适合的鸡尾酒配方，同时提供详细的配方展示，帮助用户轻松制作和享受美味的鸡尾酒。本应用基于 TheCocktailDB API，提供丰富的鸡尾酒配方数据库和精准的查询推荐服务。

This application is an online query and recommendation tool designed for cocktail enthusiasts. Users can quickly obtain suitable cocktail recipes by entering available ingredients, preferences, or specific conditions. It also provides detailed recipe displays to help users easily create and enjoy delicious cocktails. This application is based on TheCocktailDB API, offering a rich cocktail recipe database and accurate query recommendations.

The Cocktail DB API ( https://www.thecocktaildb.com/api.php )

项目地址: ( https://terenzzzz.cn/whatToMix )

Project URL: ( https://terenzzzz.cn/whatToMix )

# 核心功能 | Core Features

### 1. 查询功能 | Query Functionality

- **根据名字查询鸡尾酒**：用户可输入鸡尾酒名称，快速获取相关配方信息。
- **Search cocktails by name**: Users can enter a cocktail name to quickly retrieve relevant recipe information.
- **根据名字查询材料**：用户可输入材料名称，查看该材料可用于哪些鸡尾酒配方。
- **Search ingredients by name**: Users can enter an ingredient name to see which cocktail recipes use that ingredient.

### 2. 材料匹配推荐（MixMatch） | Ingredient Matching Recommendation (MixMatch)

- 用户可输入自己拥有的材料，系统将智能推荐可行的鸡尾酒配方。
- Users can enter the ingredients they have, and the system will intelligently recommend possible cocktail recipes.

### 3. 杯型筛选 | Glass Type Filter

- 用户可选择特定的杯型，系统将推荐适合该杯型的鸡尾酒饮品。
- Users can select a specific glass type, and the system will recommend cocktails suitable for that glass.

### 4. 类别筛选 | Category Filter

- 用户可根据鸡尾酒的类型（如长饮、高球、经典等）筛选合适的配方。
- Users can filter suitable recipes based on cocktail type (e.g., long drinks, highballs, classics, etc.).

### 5. 是否带酒精筛选 | Alcohol Content Filter

- 用户可选择是否包含酒精，系统将推荐符合需求的鸡尾酒饮品。
- Users can choose whether to include alcohol, and the system will recommend cocktails that meet their needs.

### 6. 配方展示 | Recipe Display

- **配料清单**：详细列出所需材料的名称及用量。
- **Ingredient List**: Lists the required ingredients and their quantities in detail.
- **制作步骤**：提供分步说明，帮助用户轻松制作。
- **Preparation Steps**: Provides step-by-step instructions to help users make cocktails easily.
- **使用杯具**：指明该配方适用的杯型。
- **Glassware Used**: Specifies the type of glass suitable for the recipe.
- **酒的基本信息**：酒名字，类型，IBA 等。
- **Basic Cocktail Information**: Includes the cocktail name, type, IBA classification, etc.

## 从 GitHub 拉取项目并运行 | Clone and Run the Project from GitHub

1. **克隆项目 | Clone the Project**:
    
    ```
    git@github.com:terenzzzz/WhatToMix.git
    cd WhatToMix
    ```
    
2. **安装依赖 | Install Dependencies**:
    
    ```
    npm install
    ```
    
3. **配置环境变量 | Configure Environment Variables**:
    - 在项目根目录创建 `.env` 文件，并添加以下内容：
    - Create a `.env` file in the project root directory and add the following content:
        
        ```
        VITE_API_URL=API_URL
        ```
        
4. **运行项目 | Run the Project**:
    
    ```
    npm run dev
    ```
    
    - 运行后，打开浏览器访问 `http://localhost:5173/`（默认 Vite 端口）。
    - After running, open a browser and visit `http://localhost:5173/` (default Vite port).
