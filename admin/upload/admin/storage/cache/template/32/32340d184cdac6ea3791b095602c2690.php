<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* catalog/product_form.twig */
class __TwigTemplate_faef73fbb142a6cda185772841522091 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo ($context["header"] ?? null);
        echo "
";
        // line 2
        echo ($context["column_left"] ?? null);
        echo "

<div id=\"content\">
  <div class=\"container-fluid\">
    <!-- Hero Blog Section -->
    <div class=\"panel panel-default\">
      <div class=\"panel-body\">
        <div class=\"hero-blog\">
          <!-- Blog Image -->
          <div class=\"hero-blog-image text-center\">
            ";
        // line 12
        if (twig_get_attribute($this->env, $this->source, ($context["blog"] ?? null), "image", [], "any", false, false, false, 12)) {
            // line 13
            echo "              <img src=\"";
            echo twig_get_attribute($this->env, $this->source, ($context["blog"] ?? null), "image", [], "any", false, false, false, 13);
            echo "\" alt=\"";
            echo twig_get_attribute($this->env, $this->source, ($context["blog"] ?? null), "title", [], "any", false, false, false, 13);
            echo "\" class=\"img-responsive img-thumbnail\"/>
            ";
        } else {
            // line 15
            echo "              <img src=\"image/no_image.png\" alt=\"No Image\" class=\"img-responsive img-thumbnail\"/>
            ";
        }
        // line 17
        echo "          </div>

          <!-- Blog Heading -->
          <h1 class=\"hero-blog-title text-center\">";
        // line 20
        echo twig_get_attribute($this->env, $this->source, ($context["blog"] ?? null), "title", [], "any", false, false, false, 20);
        echo "</h1>

          <!-- Blog Meta -->
          <div class=\"hero-blog-meta text-center\">
            <span class=\"author\">
              <i class=\"fa fa-user\"></i> ";
        // line 25
        echo twig_get_attribute($this->env, $this->source, ($context["blog"] ?? null), "author", [], "any", false, false, false, 25);
        echo "
            </span>
            <span class=\"date\">
              <i class=\"fa fa-calendar\"></i> ";
        // line 28
        echo twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, ($context["blog"] ?? null), "date_added", [], "any", false, false, false, 28), "d M Y H:i");
        echo "
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.hero-blog {
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}
.hero-blog-image img {
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
}
.hero-blog-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
}
.hero-blog-meta {
  color: #666;
  font-size: 14px;
}
.hero-blog-meta span {
  margin: 0 10px;
}
</style>

";
        // line 64
        echo ($context["footer"] ?? null);
        echo "
";
    }

    public function getTemplateName()
    {
        return "catalog/product_form.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  126 => 64,  87 => 28,  81 => 25,  73 => 20,  68 => 17,  64 => 15,  56 => 13,  54 => 12,  41 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "catalog/product_form.twig", "");
    }
}
