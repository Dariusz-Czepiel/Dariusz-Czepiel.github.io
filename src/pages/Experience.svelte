<div class="experience">
    <section class="funkcje">
        <div>
            <h2>Jakie pełniłem funkcje w projektach?</h2>
            <small><i>Wylistuj jakie/ile projektów z krótkim opisem</i></small>
            <h4>Full-stack developer:</h4>
                <ul>
                    <li>Cos tu bedzie</li>
                </ul>
            <small><i>Powinny być dwa poziomy listy</i></small>
            <h4>Back-end developer:</h4>
            <ul>
                <li>Usługi Windows synchronizujące dane pomiędzy systemami</li>
            </ul>

            <h4>Front-end developer:</h4>
            <ul>
                <li>Ta strona ;)</li>
            </ul>
        </div>
    </section>
    <section class="technologie">
        <div>
            <h2>W jakich techonolgiach pracuje?</h2>
            <small><i>Zrob do tego ładne ikonki</i></small>
            <p>
                C#: .NET, .NET Core, ASP.NET Core
            </p>
            <p>
                JS: React, Svelte
            </p>
            <p>
                Database: MSSQL, MongoDB
            </p>
        </div>
    </section>
</div>

<style>
    .experience{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: clamp(100px, 30vw, 600px);
        padding: 10px;
        text-align: left;
        margin-bottom: 10px;
    }
    .experience:last-child {
        margin-bottom: 0px;
    }
    .funkcje{
        border: 1px solid red;
    }
    .technologie{
        border: 1px solid green;
    }
</style>